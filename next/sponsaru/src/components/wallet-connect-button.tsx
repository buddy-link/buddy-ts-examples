'use client';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { truncateString } from '@/utils/truncate';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { Button } from './ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MobileMenu, MobileMenuClose, MobileMenuContent, MobileMenuTrigger } from './ui/mobile-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogoutIcon, UserIcon, WalletIcon } from '@/assets/icons';

export function BuddyConnectWalletButton() {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const truncatedWalletAddress = useMemo(() => {
    return truncateString(publicKey?.toBase58() ?? '');
  }, [publicKey]);

  const disconnectWallet = useCallback(async () => {
    await disconnect();
  }, [disconnect]);

  const changeWallet = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  if (!wallet || !publicKey)
    return (
      <Button
        variant="primary"
        className={cn('group flex h-10 items-center justify-center gap-3 border-0')}
        onClick={changeWallet}
      >
        <span>Connect Wallet</span>
      </Button>
    );

  if (isDesktop)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary">
            <span>{truncatedWalletAddress}</span>
            {/* <Avatar className="object-fit h-10 w-10 items-center justify-center border border-secondary-foreground">
              <AvatarFallback>
                <UserIcon className="p-1" />
              </AvatarFallback>
              <AvatarImage
                src={'#'}
                alt="Profile Pic Preview"
                className={cn('h-full w-full rounded-full object-cover')}
              />
            </Avatar> */}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="flex w-full min-w-48 max-w-[26rem]  flex-col gap-1 border-0 rounded-none shadow-gray bg-white px-2 py-4"
        >
          {/* <DropdownMenuItem className="p-0" asChild>
            <Link href={'#'}>
              <Button
                variant="ghost"
                type="button"
                className="flex w-full outline-0 ring-0 hover:bg-primary  hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                View Profile Page
              </Button>
            </Link>
          </DropdownMenuItem> */}
          <DropdownMenuItem asChild>
            <Button
              variant="ghost"
              type="button"
              className="w-full outline-0 ring-0   gap-2 grid grid-cols-[1fr,10fr] justify-center items-center focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-3 py-1 h-fit"
              onClick={disconnectWallet}
            >
              <LogoutIcon className="h-3 w-3" />
              <span className="text-left"> Disconnect</span>
            </Button>
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="p-0">
            <Button
              variant="ghost"
              type="button"
              className="w-full outline-0 ring-0 hover:bg-primary hover:text-foreground  focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={changeWallet}
            >
              Change Wallet
            </Button>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <MobileMenu>
      <MobileMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn('group flex aspect-square size-9 items-center justify-center rounded-full')}
        >
          <WalletIcon className="h-5 w-5 " />
        </Button>
      </MobileMenuTrigger>
      <MobileMenuContent className="flex flex-col items-center justify-start">
        <Image src="/logo.webp" alt="logo" width={200} height={200} className="mt-10" />
        <div className="my-auto flex flex-col items-center justify-center gap-3">
          <Avatar className="object-fit h-[5.625rem] w-[5.625rem] items-center justify-center">
            <AvatarImage src={'#'} alt="Profile Pic Preview" className="h-full w-full rounded-full object-cover" />
            <AvatarFallback>
              <UserIcon />
            </AvatarFallback>
          </Avatar>
          <span className="text-lg text-white">{truncatedWalletAddress}</span>
        </div>
        <div className="my-auto flex w-full flex-col items-center justify-center gap-3">
          {/* <MobileMenuClose className="p-0" asChild>
            <Link href={'#'} className="w-full">
              <Button
                variant="outline"
                type="button"
                className="w-full outline-0 ring-0 hover:bg-primary  focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                View Profile Page
              </Button>
            </Link>
          </MobileMenuClose> */}
          <MobileMenuClose className="p-0" asChild>
            <Button
              variant="outline"
              type="button"
              className="w-full outline-0 ring-0 hover:bg-primary gap-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={disconnectWallet}
            >
              <LogoutIcon className="h-5 w-5" />
              Disconnect
            </Button>
          </MobileMenuClose>
          {/* <MobileMenuClose className="p-0" asChild>
            <Button
              variant="outline"
              type="button"
              className="w-full outline-0 ring-0 hover:bg-primary  focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={changeWallet}
            >
              Change Wallet
            </Button>
          </MobileMenuClose> */}
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
}
