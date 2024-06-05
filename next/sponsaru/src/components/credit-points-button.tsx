import { usePoints } from '@/hooks/use-points';
import { Button } from './ui/button';
import CircularProgressBar from './circular-progress-bar';
import { cn } from '@/lib/utils';

type CreditPointsButtonProps = {
  points: number;
  reason: string;
};

export default function CreditPointsButton({ points, reason }: CreditPointsButtonProps) {
  const { mutate: creditPoints, isPending: isCreditPending } = usePoints();
  return (
    <Button
      disabled={isCreditPending}
      variant="primary"
      className={cn(
        'text-white gap-2 px-6 py-4 w-full',
        isCreditPending && 'disabled:opacity-100 shadow-[0px_0px_0px_0px_#ff9b61_inset] disabled:translate-y-[2px]'
      )}
      onClick={() => creditPoints({ value: points, reason })}
    >
      {isCreditPending ? (
        <CircularProgressBar percentage={75} text="" size={16} strokeWidth={3} className="animate-spin" />
      ) : (
        'claim'
      )}
    </Button>
  );
}
