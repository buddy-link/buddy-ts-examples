import { JoystickIcon } from '@/assets/icons';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import CreateQuestDialog from './create-quest-dialog';
import { mockedQuests } from './mocked-quests';
import { CreditPoints, usePoints } from '@/hooks/use-points';
import { UseMutateFunction } from '@tanstack/react-query';
import CreditPointsButton from './credit-points-button';

type Quest = {
  name: string;
  config: {
    pointValue: number;
    repeatFrequency: 'none';
    useLastSuccessAsEpoch: boolean;
    MaximumTimeToComplete: number;
    timezone: string;
    repeatLimit: number;
  };
  image: string;
  displayName: string;
  owner: string;
  trigger: {
    type: string;
    provider: string;
    args: Record<string, unknown>;
  };
};

type QuestsDialogProps = {
  quests: Quest[];
  isLoading: boolean;
};

const QuestsDialog = ({ quests, isLoading }: QuestsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          <JoystickIcon />
          Quests
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[22rem] sm:max-w-[680px] lg:max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Quests</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">
          &gt; Complete quests to increase personal & team points
        </DialogDescription>
        <div className="flex flex-col gap-3">
          {/* <CreateQuestDialog /> */}

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto max-h-[57vh] lg:max-h-[35vh]">
              {mockedQuests.map((quest, index) => (
                <div
                  key={index}
                  className="shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex items-center justify-between gap-6 p-[0.625rem] w-[300px]"
                >
                  <div className="flex gap-2 items-center justify-center">
                    <CircularProgressBar percentage={70} text={quest.config.PointValue} />
                    <div className="flex flex-col items-start justify-center whitespace-nowrap">
                      <span className="text-xs">
                        {quest.displayName.length >= 16 ? (
                          <TooltipProvider delayDuration={300}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="cursor-pointer">{quest.displayName.slice(0, 12)}...</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {quest.displayName}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          quest.displayName
                        )}
                      </span>
                      <p className="text-[0.625rem]">
                        Time left: <span className="text-light-primary">{'17m 23s'}</span>
                      </p>
                    </div>
                  </div>
                  <CreditPointsButton points={quest.config.PointValue} reason={quest.displayName} />
                </div>
              ))}
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="primary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestsDialog;
