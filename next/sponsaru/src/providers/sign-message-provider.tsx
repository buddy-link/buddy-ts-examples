'use client';

import { useWalletSignIn } from '@/hooks/use-wallet-signin';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const SignMessageProvider = () => {
  const { publicKey } = useWallet();
  const { walletSignIn } = useWalletSignIn();
  const session = useSession();

  useEffect(() => {
    if (!session) return;
    if (session.status === 'loading') return;

    if (session.status === 'unauthenticated' && publicKey) {
      walletSignIn();
      return;
    }

    return () => {};
  }, [session, publicKey, walletSignIn]);

  return <></>;
};

export default SignMessageProvider;
