// import { usePoints } from '@/hooks/use-points';
import { Button } from '../ui/button';
import CircularProgressBar from './circular-progress-bar';
import { cn } from '@/lib/utils';
import { useAttempt } from '@/hooks/use-attempt';
import { useCallback, useMemo } from 'react';
import useUser from '@/hooks/use-user';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { CreditPointsButtonProps } from '@/types/types';

export default function CreditPointsButton({ quest }: CreditPointsButtonProps) {
  // const { mutate: creditPoints, isPending: isCreditPending } = usePoints();
  const session = useSession();
  const wallet = useWallet();
  const { mutate: creditPoints, isPending: isCreditPending } = useAttempt();
  const { user } = useUser(true);
  const questId = useMemo(() => `${quest.name}_${quest.owner}`, [quest]);
  const userId = useMemo(() => user.data?.emailIdentities[0].userId, [user]);

  const handleClick = useCallback(() => {
    window.open(quest.trigger.args.post as string, '_blank');
    creditPoints({
      questID: questId,
      userID: userId,
      args: {
        wallet: wallet.publicKey?.toBase58() ?? user.data.walletIdentities[0].walletPublicKey,
        walletProvider: wallet.wallet?.adapter?.name ?? '',
        email: user.data.emailIdentities[0].email,
        browser: navigator.userAgent,
        time: new Date().toISOString(),
      },
    });
  }, [creditPoints, questId, userId, wallet, quest, user]);

  return (
    <Button
      disabled={isCreditPending || quest.status === 'completed' || session.status !== 'authenticated'}
      variant="primary"
      className={cn(
        'text-white gap-2 px-6 py-4 w-fit  disabled:shadow-[0px_0px_0px_0px_#ff9b61_inset] disabled:translate-y-[2px]',
        quest.status === 'completed' && 'bg-green-400 disabled:opacity-100',
        session.status !== 'authenticated' && 'opacity-80'
      )}
      onClick={handleClick}
    >
      {isCreditPending && (
        <CircularProgressBar percentage={75} text="" size={16} strokeWidth={3} className="animate-spin" />
      )}
      {!isCreditPending && quest.status === 'completed' ? 'complete' : 'start'}
    </Button>
  );
}
