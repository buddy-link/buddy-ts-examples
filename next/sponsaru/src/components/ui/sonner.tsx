'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <div className="shadow-sm">
      <Sonner
        theme={theme as ToasterProps['theme']}
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              'group toast group-[.toaster]:bg-background group-[.toaster]:text-light-primary  group-[.toaster]:shadow-[0px_-4px_0px_0px_#ff9b61_inset] group-[.toaster]:rounded-md  group-[.toaster]:border-0',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          },
        }}
        {...props}
      />
    </div>
  );
};

export { Toaster };
