import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CrownIcon, UserIcon } from '@/assets/icons';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Team } from './chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Skeleton } from './ui/skeleton';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type LeaderboardProps = {
  teamsData: Team[];
  isLoading: boolean;
};

const Leaderboard = ({ teamsData, isLoading }: LeaderboardProps) => {
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
          <TabsTrigger value="solo" className=" text-primary-dark">
            Solo
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <Card className="border-0 shadow-none gap-4 flex flex-col">
            {isLoading ? (
              <LoadingLeaderboard />
            ) : (
              teamsData.map((team, index) => (
                <CardContent
                  key={team.id}
                  className="space-y-2 flex flex-row gap-3 items-center justify-between p-0 h-full"
                >
                  <div className="flex gap-5 items-center justify-center">
                    <Avatar className="object-fit h-12 w-12 items-center justify-center relative overflow-visible">
                      <AvatarImage
                        src={'/logo.webp'}
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
                      {team.id.length >= 11 ? (
                        <TooltipProvider delayDuration={300}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-pointer">{team.id.slice(0, 10)}...</span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p> {team.id}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        team.id
                      )}
                    </span>
                  </div>
                  <span className="!m-0 font-semibold text-light-primary">
                    {team.points.toLocaleString('en-US', {
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
            {isLoading ? (
              <LoadingLeaderboard />
            ) : (
              [1, 2, 3, 4, 5].map((member, index) => (
                <CardContent key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0">
                  <div className="flex gap-5 items-center justify-center">
                    <Avatar className="object-fit h-12 w-12 items-center justify-center relative overflow-visible">
                      <AvatarImage
                        src={'/logo.webp'}
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
                    <span className="font-medium text-primary-dark">John</span>
                  </div>
                  <span className="!m-0 font-semibold text-light-primary">19,100</span>
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
    .map((index) => (
      <div key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0 h-12">
        <Skeleton className="w-full h-12 bg-[#f8e5d6]" />
      </div>
    ));
