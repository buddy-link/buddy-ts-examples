import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CrownIcon } from '@/assets/icons';
import { TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { usePoints } from '@/hooks/use-points';
import { Team } from '@/types/types';
import TeamLeaderboard from './team-leaderboard';
import SoloLeaderboard from './solo-leaderboard';
import LoadingLeaderboard from './loading-leaderboard';

type LeaderboardProps = {
  teamsData: Team[];
  isLoading: boolean;
};

const Leaderboard = ({ teamsData, isLoading }: LeaderboardProps) => {
  const { topGroupsQuery, topUsersQuery } = usePoints();

  return (
    <Card className={cn('bg-[#FCF4EE] border-4 border-[rgb(252,244,238)]')}>
      <CardHeader className="flex flex-row justify-between items-center p-3">
        <CardTitle className="text-xl text-primary-foreground">LeaderBoard</CardTitle>
        <CrownIcon className="w-8 h-8 !m-0" />
      </CardHeader>
      <CardContent className="grid gap-6 bg-white rounded-lg pt-4 px-3 w-[300px]">
        <TabsList className="grid w-full grid-cols-2 bg-white border-[3px] border-[#FCF4EE] h-fit rounded-xl">
          <TabsTrigger value="team" className="text-primary-dark">
            Team
          </TabsTrigger>
          <TabsTrigger key="solo" value="solo" className="text-primary-dark">
            Solo
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          {topGroupsQuery.isLoading ? <LoadingLeaderboard /> : <TeamLeaderboard topGroups={topGroupsQuery.data} />}
        </TabsContent>
        <TabsContent value="solo">
          {topUsersQuery.isLoading ? <LoadingLeaderboard /> : <SoloLeaderboard topUsers={topUsersQuery.data} />}
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
