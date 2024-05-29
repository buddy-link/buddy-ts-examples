import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { WalletConnectionProvider } from '@/providers/wallet-provider';
import { cn } from '@/lib/utils';
import ReactQueryProvider from '@/providers/react-query-provider';
import SessionProvider from '@/providers/session-provider';
import { Toaster } from '@/components/ui/sonner';
import SignMessageProvider from '@/providers/sign-message-provider';
import { UserProvider } from '@/providers/user-provider';
import { cookies } from 'next/headers';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Sponsaru by Buddy.Link',
  description: '',
  icons: {
    icon: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
  },
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Sponsaru by Buddy.Link',
    description: '',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BuddyLinkApp',
    creator: '@BuddyLinkApp',
    title: 'Sponsaru by Buddy.Link',
    description: '',
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const googleToken: User.GoogleToken = JSON.parse(cookieStore.get('google_token')?.value || '{}');
  return (
    <html lang="en">
      <body className={cn(popins.className, 'bg-[#FCF4EE] relative mt-24')}>
        <WalletConnectionProvider>
          <SessionProvider>
            <ReactQueryProvider>
              <UserProvider googleToken={googleToken}>
                <Header />
                {children}
              </UserProvider>
            </ReactQueryProvider>
            <SignMessageProvider />
          </SessionProvider>
        </WalletConnectionProvider>
        <Toaster />
      </body>
    </html>
  );
}
