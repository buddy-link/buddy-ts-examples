import { JoystickIcon, TeamsIcon } from '@/assets/icons';
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
import CreateTeamDialog from './create-team-dialog';

type TeamsDialogProps = {
  teams: Team[];
  isLoading: boolean;
};
const TeamsDialog = ({ teams, isLoading }: TeamsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          <TeamsIcon />
          Teams
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-96 sm:max-w-screen-sm lg:max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Teams</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">
          <ul>
            <li> &gt; Join teams to combine your point totals on the Team Leaderboards</li>
            <li>&gt; Make your own team or join existing ones, it’s your choice!</li>
          </ul>
        </DialogDescription>

        <div className="flex flex-col gap-3">
          <CreateTeamDialog />

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto max-h-[65vh] lg:max-h-[35vh]">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex items-center justify-around gap-6 p-[0.625rem] text-sm w-[300px]"
                >
                  <div className="flex gap-2 items-center justify-center">
                    <div className="flex flex-col items-start justify-center whitespace-nowrap">
                      <div className="text-light-primary font-bold">
                        {team.id.length >= 13 ? (
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
                      </div>
                      <p className="text-[0.625rem]">
                        points:
                        <span className="ml-1">
                          {team.points.toLocaleString('en-US', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center whitespace-nowrap">
                      <span className="text-light-primary font-bold">Members</span>

                      <span className="text-[0.625rem]">
                        {team.members.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant={index === 1 ? 'destructive' : 'primary'}
                    className={cn('text-white gap-2 px-6 py-4 ')}
                  >
                    {index === 1 ? 'Leave' : 'Join'}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamsDialog;
