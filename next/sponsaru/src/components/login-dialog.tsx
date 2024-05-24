'use client';

import { TeamsIcon, WalletIcon } from '@/assets/icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import CircularProgressBar from './circular-progress-bar';
import { cn } from '@/lib/utils';
import { Team } from './chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { BuddyConnectWalletButton } from './wallet-connect-button';
import { signIn, useSession } from 'next-auth/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';
import { truncateString } from '@/utils/truncate';

const LoginDialog = () => {
  const session = useSession();
  const wallet = useWallet();
  const truncatedWalletAddress = useMemo(() => {
    return truncateString(wallet.publicKey?.toBase58() ?? '');
  }, [wallet.publicKey]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          {session?.status === 'loading' || wallet.connecting
            ? 'loading...'
            : session?.status === 'unauthenticated'
              ? 'Connect'
              : session?.status === 'authenticated' &&
                wallet.publicKey && (
                  <div className="flex gap-2 items-center justify-center">
                    <WalletIcon className="fill-white h-4 w-4" />
                    <span className="mt-[1px]">{truncatedWalletAddress}</span>
                  </div>
                )}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Login</DialogTitle>
        </DialogHeader>
        {/* <DialogDescription className="font-bold">
          <ul>
            <li> &gt; Join teams to combine your point totals on the Team Leaderboards</li>
            <li>&gt; Make your own team or join existing ones, it’s your choice!</li>
          </ul>
        </DialogDescription> */}
        <div className="flex flex-col  justify-center py-6 gap-4 px-6">
          <BuddyConnectWalletButton />
          {session?.status === 'unauthenticated' && (
            <Button variant="primary" className="text-white gap-2 px-6 py-4" onClick={() => signIn('google')}>
              Sign In with Google
            </Button>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="primary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
