'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import useUpdateCognitoCredentials from './use-cognito-credentials';
import { createContext } from 'react';
import { Credentials } from '@aws-sdk/client-cognito-identity';
import useUser from '@/hooks/use-user';
import { useWallet } from '@solana/wallet-adapter-react';
import { CreateUserEmailIdentity, CreateUserWalletIdentity } from '@/lib/auth';
import useAuthReq from '@/hooks/use-auth-request';

interface Props extends PropsWithChildren {
  googleToken: User.GoogleToken;
}

export interface UserContextType {
  isAuthenticated: boolean;
  credentials: Credentials | null;
  user: User.Item | null;
}

export const UserProvider = ({ children, googleToken }: Props) => {
  const session = useSession();
  const [state, setState] = useState<UserContextType>({
    credentials: null,
    isAuthenticated: false,
    user: null,
  });
  const { user } = useUser(session.status === 'authenticated' && state.credentials !== null);
  const { publicKey, connected } = useWallet();
  const authReq = useAuthReq();

  useUpdateCognitoCredentials({
    googleToken: googleToken,
    setState,
  });

  const handleEmailIdentityCreate = useCallback(async () => {
    if (session.status !== 'authenticated') return;
    if (!session.data.user) return;
    if (!session.data.user.email) return;

    const emailIdentity = await CreateUserEmailIdentity(authReq, {
      email: session.data.user.email,
      primary: true,
    });
    return emailIdentity;
  }, [authReq, session.data?.user, session.status]);

  const handleWalletIdentityCreate = useCallback(async () => {
    console.log('handleWalletIdentityCreate');
    if (session.status !== 'authenticated') return;
    if (!publicKey) return;
    if (!user.data) return;

    console.log('handleWalletIdentityCreate2');
    const walletIdentity = await CreateUserWalletIdentity(authReq, {
      walletPublicKey: publicKey.toBase58(),
      primary: true,
    });
    return walletIdentity;
  }, [authReq, publicKey, session.status, user.data]);

  useEffect(() => {
    handleEmailIdentityCreate();
  }, [handleEmailIdentityCreate, session.status]);

  useEffect(() => {
    handleWalletIdentityCreate();
  }, [handleWalletIdentityCreate, connected]);

  useEffect(() => {
    setState((prevState) => {
      if (!user.data) {
        return prevState;
      }

      return {
        ...prevState,
        ...{
          user: user.data,
        },
      };
    });
  }, [user.data]);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export const UserContext = createContext<UserContextType>({
  isAuthenticated: false,
  credentials: null,
  user: null,
});
