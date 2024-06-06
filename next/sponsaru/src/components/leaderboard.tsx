import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CrownIcon, TeamsIcon, UserIcon } from '@/assets/icons';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Team } from './chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Skeleton } from './ui/skeleton';
import { useTopGroups, useTopUsers } from '@/hooks/use-points';

type LeaderboardProps = {
  teamsData: Team[];
  isLoading: boolean;
};

const Leaderboard = ({ teamsData, isLoading }: LeaderboardProps) => {
  const { data: topUsers, isLoading: isTopUsersLoading } = useTopUsers();
  const { data: topGroups, isLoading: isTopGroupsLoading } = useTopGroups();

  console.log('topUsers', topUsers);

  return (
    <Card className={cn('bg-[#FCF4EE] border-4 border-[rgb(252,244,238)]')}>
      <CardHeader className="flex flex-row justify-between items-center p-3">
        <CardTitle className="text-xl text-primary-foreground">LeaderBoard</CardTitle>
        <CrownIcon className="w-8 h-8 !m-0" />
      </CardHeader>
      <CardContent className="grid gap-6 bg-white rounded-lg pt-4 px-3 w-[300px]">
        <TabsList className="grid w-full grid-cols-2 bg-white border-[3px] border-[#FCF4EE] h-fit rounded-xl">
          <TabsTrigger value="team" className=" text-primary-dark">
            Team
          </TabsTrigger>
          <TabsTrigger key="solo" value="solo" className=" text-primary-dark">
            Solo
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <Card className="border-0 shadow-none gap-4 flex flex-col">
            {isTopGroupsLoading ? (
              <LoadingLeaderboard />
            ) : (
              topGroups
                .sort(
                  (
                    a: { name: string; image: string; total: number },
                    b: { name: string; image: string; total: number }
                  ) => b.total - a.total
                )
                .slice(0, 5)
                .map((team: { name: string; image: string; total: number }, index: number) => (
                  <CardContent
                    key={team.name}
                    className="space-y-2 flex flex-row gap-3 items-center justify-between p-0 h-full"
                  >
                    <div className="flex gap-5 items-center justify-center">
                      <Avatar className="object-fit h-12 w-12 items-center justify-center relative overflow-visible">
                        <AvatarImage
                          src={team.image}
                          alt="Profile Pic Preview"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <AvatarFallback>
                          <TeamsIcon className="fill-black" />
                        </AvatarFallback>
                        <div className="absolute bottom-0 -right-3 rounded-full flex items-center justify-center p-1 w-6 h-6 border-2 border-white bg-light-primary aspect-square text-xs">
                          {index + 1}
                        </div>
                      </Avatar>
                      <span className="font-medium text-primary-dark whitespace-nowrap  ">
                        {team.name.length >= 11 ? (
                          <TooltipProvider delayDuration={300}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="cursor-pointer">{team.name.slice(0, 10)}...</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {team.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          team.name
                        )}
                      </span>
                    </div>
                    <span className="!m-0 font-semibold text-light-primary">
                      {team.total.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        notation: 'compact',
                      })}
                    </span>
                  </CardContent>
                ))
            )}
          </Card>
        </TabsContent>
        <TabsContent value="solo">
          <Card className="border-0 shadow-none gap-4 flex flex-col">
            {isTopUsersLoading ? (
              <LoadingLeaderboard />
            ) : (
              topUsers.slice(0, 5).map((member: { name: string; image: string; total: number }, index: number) => (
                <CardContent key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0">
                  <div className="flex gap-5 items-center justify-center">
                    <div className="flex gap-5 items-center justify-center">
                      <Avatar className="object-fit h-12 w-12 items-center justify-center relative overflow-visible">
                        <AvatarImage
                          src={member.image}
                          alt="Profile Pic Preview"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <AvatarFallback>
                          <UserIcon />
                        </AvatarFallback>
                        <div className="absolute bottom-0 -right-3 rounded-full flex items-center justify-center p-1 w-6 h-6 border-2 border-white bg-light-primary aspect-square text-xs">
                          {index + 1}
                        </div>
                      </Avatar>
                      <span className="font-medium text-primary-dark whitespace-nowrap  ">
                        {member.name.length >= 11 ? (
                          <TooltipProvider delayDuration={300}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="cursor-pointer">{member.name.slice(0, 10)}...</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {member.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          member.name
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="!m-0 font-semibold text-light-primary">
                    {member.total.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                      notation: 'compact',
                    })}
                  </span>
                </CardContent>
              ))
            )}
          </Card>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;

const LoadingLeaderboard = () =>
  Array(5)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0 h-12">
        <Skeleton className="w-full h-12 bg-[#f8e5d6]" />
      </div>
    ));
