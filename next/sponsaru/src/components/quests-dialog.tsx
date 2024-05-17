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

const QuestsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          <JoystickIcon />
          Quests
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Quests</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">
          &gt; Complete quests to increase personal & team points
        </DialogDescription>

        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((quest, index) => (
            <div
              key={index}
              className="shadow-[0px_-4px_0px_0px_#ff9b61_inset] rounded-md border-x-2 border-t-2 border-[#FCF4EE] flex gap-6 p-[0.625rem]"
            >
              <div className="flex gap-2 items-center justify-center">
                <CircularProgressBar percentage={70} text={100} />
                <div className="flex flex-col items-start justify-center whitespace-nowrap">
                  <span className="text-xs">Daily Login reward</span>
                  <p className="text-[0.625rem]">
                    Time left: <span className="text-light-primary">{'17m 23s'}</span>
                  </p>
                </div>
              </div>
              <Button variant="primary" className="text-white gap-2 px-6 py-4">
                Claim
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

export default QuestsDialog;
