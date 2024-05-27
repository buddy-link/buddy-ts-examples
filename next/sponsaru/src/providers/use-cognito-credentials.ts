import { useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import * as ci from '@aws-sdk/client-cognito-identity';
import moment from 'moment';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { UserContextType } from './user-provider';

interface Props {
  googleToken: User.GoogleToken;
  setState: Dispatch<SetStateAction<UserContextType>>;
}
const useUpdateCognitoCredentials = ({ googleToken, setState }: Props) => {
  const session = useSession();

  const getCredentials = useCallback(async () => {
    if (session.status !== 'authenticated' || !googleToken.jwt) {
      return;
    }

    let jwt = googleToken.jwt;

    if (moment(googleToken.exp * 1000).unix() < moment().unix()) {
      const response = await axios({
        method: 'POST',
        url: '/api/auth/refresh-token',
        data: {
          token: googleToken.refreshToken,
        },
      });
      if (response.data.token) {
        jwt = response.data.token;
        setCookie(
          'google_token',
          JSON.stringify({
            ...googleToken,
            jwt: response.data.token,
            exp: moment().add(1, 'hour').unix(),
          }),
          { secure: true }
        );
      }
    }

    const creds = fromCognitoIdentityPool({
      identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
      clientConfig: { region: process.env.NEXT_PUBLIC_AWS_REGION! },
      logins: {
        [`accounts.google.com`]: jwt,
      },
    });

    const identityClient = new ci.CognitoIdentityClient({
      region: process.env.NEXT_PUBLIC_AWS_REGION!,
      credentials: creds,
    });

    const { IdentityId } = await identityClient.send(
      new ci.GetIdCommand({
        IdentityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
        AccountId: process.env.NEXT_PUBLIC_AWS_ACCOUNT_ID!,
        Logins: {
          [`accounts.google.com`]: jwt,
        },
      })
    );
    const { Credentials } = await identityClient.send(
      new ci.GetCredentialsForIdentityCommand({
        IdentityId: IdentityId!,
        Logins: {
          [`accounts.google.com`]: jwt,
        },
      })
    );

    if (Credentials === undefined) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      ...{ credentials: Credentials },
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleToken, session.status]);

  useEffect(() => {
    getCredentials();
  }, [getCredentials]);

  return null;
};

export default useUpdateCognitoCredentials;
