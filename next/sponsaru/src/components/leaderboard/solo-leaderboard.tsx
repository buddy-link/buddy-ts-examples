import { Card, CardContent } from '@/components/ui/card';

import { UserIcon } from '@/assets/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type User = {
  name: string;
  image: string;
  total: number;
};

type SoloLeaderboardProps = {
  topUsers: User[];
};

const SoloLeaderboard = ({ topUsers }: SoloLeaderboardProps) => {
  return (
    <Card className="border-0 shadow-none gap-4 flex flex-col">
      {topUsers.slice(0, 5).map((member, index) => (
        <CardContent key={index} className="space-y-2 flex flex-row gap-3 items-center justify-between p-0">
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
            <span className="font-medium text-primary-dark whitespace-nowrap">
              {member.name.length >= 11 ? (
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer">{member.name.slice(0, 10)}...</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                member.name
              )}
            </span>
          </div>
          <span className="!m-0 font-semibold text-light-primary">
            {member.total.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              notation: 'compact',
            })}
          </span>
        </CardContent>
      ))}
    </Card>
  );
};

export default SoloLeaderboard;
