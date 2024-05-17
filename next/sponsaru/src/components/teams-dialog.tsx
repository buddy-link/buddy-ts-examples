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

const TeamsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          <TeamsIcon />
          Teams
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Teams</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">
          <ul>
            <li> &gt; Join teams to combine your point totals on the Team Leaderboards</li>
            <li>&gt; Make your own team or join existing ones, it’s your choice!</li>
          </ul>
        </DialogDescription>

        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((team, index) => (
            <div
              key={index}
              className="shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex items-center justify-around gap-6 p-[0.625rem]"
            >
              <div className="flex gap-2 items-center justify-center">
                <div className="flex flex-col items-start justify-center whitespace-nowrap">
                  <span className="text-light-primary font-bold">Bonks</span>
                  <p className="text-[0.625rem]">
                    points:<span className="ml-1">{'100,000'}</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center whitespace-nowrap">
                  <span className="text-light-primary font-bold">Members</span>

                  <span className="text-[0.625rem]">{'100,000'}</span>
                </div>
              </div>
              <Button variant={index === 1 ? 'destructive' : 'primary'} className={cn('text-white gap-2 px-6 py-4 ')}>
                {index === 1 ? 'Leave' : 'Join'}
              </Button>
            </div>
          ))}
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

export default TeamsDialog;
