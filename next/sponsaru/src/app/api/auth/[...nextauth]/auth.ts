import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
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
      }
      return true;
    },
  },
});
