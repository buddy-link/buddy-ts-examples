'use client';

import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useCallback, useEffect, useState } from 'react';
import GoAnimation from './animations/go-animation';
import useUser from '@/hooks/use-user';

const sections = [
  {
    title: 'Teams',
    description:
      'Join teams to combine your point totals on the Team Leaderboards. Make your own team or join existing ones, it’s your choice!',
  },
  {
    title: 'Quests',
    description: 'Complete quests to increase personal and team points.',
  },
  {
    title: 'Leaderboards',
    description:
      'Points count individually and for the team you joined. Rank high on the leaderboards for bragging rights and more!',
  },
];

const HowToPlayDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);
  const { user } = useUser(true);

  useEffect(() => {
    if (user.data && user.data.walletIdentities.length === 0) return setOpenDialog(false);
    setOpenDialog(true);
  }, [user.data]);

  const onOpenChange = useCallback((open: boolean) => {
    setOpenDialog(open);
    if (!open) setOpenAnimation(true);
  }, []);

  return (
    <>
      {!openDialog && openAnimation && <GoAnimation open={openAnimation} />}
      <Dialog open={openDialog} onOpenChange={(open) => onOpenChange(open)}>
        <DialogTrigger asChild>
          <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
            How to Play
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-screen-sm">
          <DialogHeader>
            <DialogTitle className="font-bold text-5xl">How to Play</DialogTitle>
          </DialogHeader>

          {sections.map((section) => (
            <div key={section.title} className="mb-3">
              <h3 className={`text-lg font-bold text-primary-dark`}>{section.title}</h3>
              <p className="text-[#C38B88]">{section.description}</p>
            </div>
          ))}

          <DialogFooter>
            <div className="items-center justify-center w-full flex">
              <DialogClose asChild>
                <Button variant="primary">Start Playing!</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HowToPlayDialog;
