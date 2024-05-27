'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import useUpdateCognitoCredentials from './use-cognito-credentials';
import { createContext } from 'react';
import { Credentials } from '@aws-sdk/client-cognito-identity';
import useUser from '@/hooks/use-user';

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

  if (session.status === 'loading') {
    return <div>Loading...</div>;
  }

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export const UserContext = createContext<UserContextType>({
  isAuthenticated: false,
  credentials: null,
  user: null,
});
