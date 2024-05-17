import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CrownIcon, UserIcon } from '@/assets/icons';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

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

const Leaderboard = () => {
  return (
    <Card className={cn('bg-[#FCF4EE] border-4 border-[#FCF4EE]')}>
      <CardHeader className="flex flex-row justify-between items-center p-3">
        <CardTitle className="text-xl text-primary-foreground">LeaderBoard</CardTitle>
        <CrownIcon className="w-8 h-8 !m-0" />
      </CardHeader>
      <CardContent className="grid gap-6 bg-white rounded-lg pt-4 px-3">
        <Tabs defaultValue="team" className="w-[300px] flex flex-col gap-6 ">
          <TabsList className="grid w-full grid-cols-2 bg-white border-[3px] border-[#FCF4EE] h-fit rounded-xl">
            <TabsTrigger value="team" className=" text-primary-dark">
              Team
            </TabsTrigger>
            <TabsTrigger value="solo" className=" text-primary-dark">
              Solo
            </TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <Card className="border-0 shadow-none gap-4 flex flex-col ">
              {[1, 2, 3, 4, 5].map((member, index) => (
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
                    <span className="font-medium text-primary-dark">Wagg</span>
                  </div>
                  <span className="!m-0 font-semibold text-light-primary">7,100</span>
                </CardContent>
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="solo">
            <Card className="border-0 shadow-none gap-4 flex flex-col">
              {[1, 2, 3, 4, 5].map((member, index) => (
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
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
