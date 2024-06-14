import { Skeleton } from '@/components/ui/skeleton';

const LoadingLeaderboard = () =>
  Array(5)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0 h-12">
        <Skeleton className="w-full h-12 bg-[#f8e5d6]" />
      </div>
    ));

export default LoadingLeaderboard;
