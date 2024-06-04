'use client';

import { TeamsIcon, WalletIcon } from '@/assets/icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

import { BuddyConnectWalletButton } from './wallet-connect-button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { use, useCallback, useEffect, useMemo, useState } from 'react';
import { truncateString } from '@/utils/truncate';
import { cn } from '@/lib/utils';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import useUser from '@/hooks/use-user';

const LoginDialog = () => {
  const session = useSession();
  const { user } = useUser(true);
  const wallet = useWallet();
  const { setVisible } = useWalletModal();

  const [openDialog, setOpenDialog] = useState(false);

  const truncatedWalletAddress = useMemo(() => {
    return truncateString(session?.data?.user?.name ?? wallet.publicKey?.toBase58() ?? '');
  }, [session?.data?.user?.name, wallet.publicKey]);

  const isAuthenticated = useMemo(() => session.status === 'authenticated', [session?.status]);

  const changeWallet = useCallback(async () => {
    await wallet.disconnect();
    await signOut({ redirect: false });

    setVisible(true);
  }, [setVisible, wallet]);

  const logout = useCallback(async () => {
    await wallet.disconnect();
    await signOut({ redirect: false });
  }, [wallet]);

  useEffect(() => {
    if (user.data && user.data.walletIdentities.length === 0) return setOpenDialog(true);

    setOpenDialog(false);
  }, [user.data]);

  console.log('session', user);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="gap-2 px-6 py-4">
          {session?.status === 'loading' || wallet.connecting
            ? 'loading...'
            : !isAuthenticated
              ? 'Connect'
              : isAuthenticated &&
                session.data?.user?.name && (
                  <div className="flex gap-2 items-center justify-center">
                    <WalletIcon className="fill-white h-4 w-4" />
                    <span className="mt-[1px]">{truncatedWalletAddress}</span>
                  </div>
                )}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xs">
        <DialogHeader>
          <DialogTitle className={cn('font-bold', isAuthenticated ? 'text-2xl' : 'text-5xl')}>
            {isAuthenticated ? truncatedWalletAddress : 'Login'}
          </DialogTitle>
        </DialogHeader>

        {isAuthenticated ? (
          <div className="flex flex-col  justify-center py-6 gap-4 px-6">
            {user.data && <BuddyConnectWalletButton />}
            {/* <DialogClose asChild>
              <Button variant="primary" type="button" className="" onClick={changeWallet}>
                Change Wallet
              </Button>
            </DialogClose> */}
            <DialogClose asChild>
              <Button variant="primary" className="text-white gap-2 px-6 py-4" onClick={logout}>
                Logout
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="flex flex-col  justify-center py-6 gap-4 px-6">
            {session?.status === 'unauthenticated' && (
              <Button variant="primary" className="text-white gap-2 px-6 py-4" onClick={() => signIn('google')}>
                Sign In with Google
              </Button>
            )}
          </div>
        )}
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
