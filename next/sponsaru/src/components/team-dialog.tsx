import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from '@/components/ui/dialog';
import Image from 'next/image';

export function TeamDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="" />
      <DialogContent className="w-fit min-w-[240px] z-50 gap-3 py-8">
        <DialogHeader className="flex items-center justify-center gap-3">
          <Image src="/logo.webp" width={84} height={84} alt="BuddyLink" />

          <DialogTitle className="font-bold">BuddyLink</DialogTitle>
        </DialogHeader>
        <span className="flex items-center justify-center space-x-2 text-light font-normal">
          {(700).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
        <DialogFooter className="flex items-center sm:justify-center w-full">
          <DialogClose asChild>
            <Button type="button" variant="primary" className="px-8">
              Join
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
