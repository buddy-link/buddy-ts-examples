import { useState, useEffect } from 'react';
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

import CreditPointsButton from './credit-points-button';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton'; // Importe o componente Skeleton do Shadcn

export type Quest = {
  name: string;
  status: string;
  config: {
    PointValue: number;
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
  const [sortedQuests, setSortedQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const sorted = [...quests].sort((a, b) => {
        if (a.status === 'completed' && b.status !== 'completed') return 1;
        if (a.status !== 'completed' && b.status === 'completed') return -1;
        return b.config.PointValue - a.config.PointValue;
      });
      setSortedQuests(sorted);
      setLoading(false);
    }
  }, [quests, isLoading]);

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

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto max-h-[57vh] lg:max-h-[35vh]">
              {[...Array(6)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[300px] h-[65px] bg-[#f8e5d6] rounded-md border-x-2 border-t-2 border-[#FCF4EE]"
                />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto max-h-[57vh] lg:max-h-[35vh]">
              {sortedQuests
                .filter((quest) => quest.owner === 'buddy')
                .map((quest, index) => (
                  <div
                    key={index}
                    className={cn(
                      'shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex items-center justify-between gap-6 p-[0.625rem] w-[300px]',
                      quest.status === 'completed' && 'shadow-[0px_-4px_0px_0px_#4ade80_inset] border-[#e3ffee]'
                    )}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <CircularProgressBar
                        percentage={quest.status === 'completed' ? 100 : 15}
                        text={quest.config.PointValue}
                        completed={quest.status === 'completed'}
                      />
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
                          Time left:{' '}
                          <span className={cn('text-light-primary', quest.status === 'completed' && 'text-green-400')}>
                            {'-'}
                          </span>
                        </p>
                      </div>
                    </div>
                    <CreditPointsButton quest={quest} />
                  </div>
                ))}
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive" className="sm:mr-2 lg:mr-3">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestsDialog;
