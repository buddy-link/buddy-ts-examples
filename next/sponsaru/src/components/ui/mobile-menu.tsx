'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import * as DialogPrimitive from '@radix-ui/react-dialog';

const MobileMenu = DialogPrimitive.Root;

const MobileMenuTrigger = DialogPrimitive.Trigger;

const MobileMenuPortal = DialogPrimitive.Portal;

const MobileMenuClose = DialogPrimitive.Close;

const MobileMenuContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <MobileMenuPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 flex h-full w-full max-w-full flex-col items-center justify-center  gap-4 bg-background p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out   data-[state=closed]:slide-out-to-bottom-full  data-[state=open]:slide-in-from-bottom-full',
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </MobileMenuPortal>
));
MobileMenuContent.displayName = DialogPrimitive.Content.displayName;

export {
  MobileMenu,
  MobileMenuPortal,
  MobileMenuClose,
  MobileMenuTrigger,
  MobileMenuContent
};
