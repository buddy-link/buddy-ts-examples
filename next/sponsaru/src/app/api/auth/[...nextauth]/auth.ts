import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';
import * as nacl from 'tweetnacl';
import * as bs58 from 'bs58';
import { CreateUserWalletIdentity, GetUser } from '@/lib/auth';
import axios from 'axios';
import useAuthReq from '@/hooks/use-auth-request';
import aws4Interceptor from 'aws4-axios';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    // CredentialsProvider({
    //   name: 'solana',
    //   credentials: {
    //     publicKey: { type: 'text' },
    //     signature: { type: 'text' },
    //   },

    //   async authorize(credentials) {
    //     console.log('credentials: ', credentials);

    //     if (!credentials) return null;
    //     try {
    //       const cookieStore = cookies();
    //       const nonce = cookieStore.get('authNonce');

    //       console.log(`nonce: ${nonce?.value}`);

    //       const message = `Sign this message: ${nonce?.value}`;
    //       const messageBytes = new TextEncoder().encode(message);

    //       const publicKeyBytes = bs58.decode(credentials.publicKey as string);
    //       const signatureBytes = bs58.decode(credentials.signature as string);

    //       const result = nacl.sign.detached.verify(messageBytes, signatureBytes, publicKeyBytes);

    //       let user;
    //       // return { name: credentials.publicKey } as User;
    //       //TODO: Fix wallet identity creation

    //       const request = axios.create();

    //       // const config = request.interceptors.request.use(async (config) => {
    //       //   // if (userContext.credentials === null) {
    //       //   //   return config;
    //       //   // }

    //       //   aws4Interceptor({
    //       //     options: {
    //       //       service: 'execute-api',
    //       //       region: process.env.NEXT_PUBLIC_AWS_REGION!,
    //       //     },
    //       //     credentials: {
    //       //       accessKeyId: userContext.credentials.AccessKeyId!,
    //       //       secretAccessKey: userContext.credentials.SecretKey!,
    //       //       sessionToken: userContext.credentials.SessionToken!,
    //       //     },
    //       //   })(config);

    //       //   return config;
    //       // });

    //       user = await GetUser(request);

    //       if (user.error) {
    //         user = await CreateUserWalletIdentity(request, {
    //           walletPublicKey: credentials.publicKey as string,
    //           primary: true,
    //         });

    //         console.log(`user: ${user.walletPublicKey}`);
    //       }

    //       console.log(`user: ${user.error}`);

    //       console.log(`result: ${result}`);

    //       if (!result) {
    //         console.log(`authentication failed`);
    //         throw new Error('user can not be authenticated');
    //       }

    //       // const user: User = { name: credentials.publicKey as string };

    //       return { name: credentials.publicKey } as User;
    //     } catch (e) {
    //       //TODO: handle authorize error
    //       return null;
    //     }
    //   },
    // }),
  ],
  secret: process.env.AUTH_SECRET!,
  callbacks: {
    signIn: async ({ account }) => {
      const cookieStore = cookies();
      if (account?.provider === 'google' && account.id_token) {
        cookieStore.set(
          'google_token',
          JSON.stringify({
            jwt: account.id_token,
            exp: account.expires_at,
            refreshToken: account.refresh_token,
          }),
          { secure: true }
        );
        return true;
      } else return true;
    },
  },
});
