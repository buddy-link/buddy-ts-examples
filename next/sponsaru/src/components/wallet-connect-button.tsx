'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo } from 'react';

import { cn } from '@/lib/utils';

import { truncateString } from '@/utils/truncate';

import { useMediaQuery } from '@/hooks/use-media-query';

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

import { Button } from './ui/button';
import { WalletIcon } from '@/assets/icons';
import { MobileMenu, MobileMenuClose, MobileMenuContent, MobileMenuTrigger } from './ui/mobile-menu';
import { DialogTrigger } from './ui/dialog';
import { SignMessageButton } from './sign-message-button';
import { CreateUserWalletIdentity } from '@/lib/auth';
import useAuthReq from '@/hooks/use-auth-request';
import useUser from '@/hooks/use-user';

export const BuddyConnectWalletButton = () => {
  const { publicKey, wallet, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  const session = useSession();
  const authReq = useAuthReq();
  const { user } = useUser(true);

  console.log(publicKey?.toBase58());

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const truncatedWalletAddress = useMemo(() => {
    return truncateString(publicKey?.toBase58() ?? '');
  }, [publicKey]);

  const logout = useCallback(async () => {
    await disconnect();
    await signOut({
      redirect: false,
    });
  }, [disconnect]);

  const changeWallet = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  if (!wallet || !publicKey)
    return (
      <DialogTrigger asChild>
        <Button
          variant="primary"
          className={cn(
            'group flex  items-center justify-center gap-3 border-0',
            !isDesktop && 'aspect-square  size-9 rounded-full p-2'
          )}
          onClick={changeWallet}
        >
          {isDesktop ? 'Connect Wallet' : <WalletIcon className="h-5 w-5 " />}
        </Button>
      </DialogTrigger>
    );

  if (isDesktop && session.status === 'authenticated')
    return (
      <>
        <DialogTrigger asChild>
          <Button variant="primary" type="button" className="" onClick={changeWallet}>
            Change Wallet
          </Button>
        </DialogTrigger>
        <DialogTrigger asChild>
          <Button variant="primary" type="button" className="" onClick={async () => await disconnect()}>
            Disconnect Wallet
          </Button>
        </DialogTrigger>
      </>
    );

  if (!isDesktop && session.status === 'authenticated')
    return (
      <MobileMenu>
        <MobileMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn('group flex aspect-square size-9 items-center justify-center rounded-full')}
          >
            <WalletIcon />
            <span>{truncatedWalletAddress}</span>
          </Button>
        </MobileMenuTrigger>
        <MobileMenuContent className="flex flex-col items-center justify-start">
          <Image src="/logo.svg" alt="logo" width={200} height={200} className="mt-10" />
          <div className="my-auto flex flex-col items-center justify-center gap-3">
            <span className="text-lg text-white">{truncatedWalletAddress}</span>
          </div>
          <div className="my-auto flex w-full flex-col items-center justify-center gap-3">
            <MobileMenuClose className="p-0" asChild>
              <Button
                variant="outline"
                type="button"
                className="w-full outline-0 ring-0 hover:bg-primary  focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={logout}
              >
                Logout
              </Button>
            </MobileMenuClose>
            <MobileMenuClose className="p-0" asChild>
              <Button
                variant="outline"
                type="button"
                className="w-full outline-0 ring-0 hover:bg-primary  focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={changeWallet}
              >
                Change Wallet
              </Button>
            </MobileMenuClose>
            <MobileMenuClose asChild>
              <Button
                variant="outline"
                type="button"
                className="w-full outline-0 ring-0 hover:bg-primary  focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Close
              </Button>
            </MobileMenuClose>
          </div>
        </MobileMenuContent>
      </MobileMenu>
    );

  if (publicKey && session.status === 'unauthenticated') return <SignMessageButton />;
};
