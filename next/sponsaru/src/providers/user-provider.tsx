'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import useUpdateCognitoCredentials from './use-cognito-credentials';
import { createContext } from 'react';
import { Credentials } from '@aws-sdk/client-cognito-identity';
import useUser from '@/hooks/use-user';
import { useWallet } from '@solana/wallet-adapter-react';
import { CreateUserWalletIdentity } from '@/lib/auth';
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

  const handleWalletIdentityCreate = useCallback(async () => {
    console.log('handleWalletIdentityCreate');
    if (session.status !== 'authenticated') return;
    if (!publicKey) return;
    if (!user.data) return;
    if (
      user.data.walletIdentities.find(
        (wallet: { walletPublicKey: string }) => wallet.walletPublicKey === publicKey.toBase58()
      )
    ) {
      return;
    }
    console.log('handleWalletIdentityCreate2');
    const walletIdentity = await CreateUserWalletIdentity(authReq, {
      walletPublicKey: publicKey.toBase58(),
      primary: user.data.walletIdentities.length === 0,
    });
    return walletIdentity;
  }, [authReq, publicKey, session.status, user.data]);

  useEffect(() => {
    handleWalletIdentityCreate();
  }, [handleWalletIdentityCreate, connected]);
  useUpdateCognitoCredentials({
    googleToken: googleToken,
    setState,
  });

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
