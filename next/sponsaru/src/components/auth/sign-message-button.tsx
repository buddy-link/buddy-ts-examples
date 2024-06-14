'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import React, { useCallback } from 'react';
import { Button } from '../ui/button';
import { useWalletSignIn } from '@/hooks/use-wallet-signin';

export function SignMessageButton() {
  const { publicKey } = useWallet();
  const { walletSignIn } = useWalletSignIn();

  const onClick = useCallback(async () => {
    await walletSignIn();
  }, [walletSignIn]);

  return (
    <Button className="animate-pulse" variant="primary" onClick={onClick} disabled={!publicKey}>
      <p>Sign Message</p>
    </Button>
  );
}
