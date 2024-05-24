'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { signIn } from 'next-auth/react';
import bs58 from 'bs58';
import React, { FC, useCallback } from 'react';
import { sign } from 'tweetnacl';
import { WalletIcon } from '@solana/wallet-adapter-react-ui';
import axios from 'axios';
import { Button } from './ui/button';
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
