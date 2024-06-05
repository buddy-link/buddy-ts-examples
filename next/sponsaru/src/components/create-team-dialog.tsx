'use client';
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

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateTeam } from '@/hooks/use-teams';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
  group_name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  group_image: z.string(),
});

export type CreateTeam = z.infer<typeof formSchema>;

const CreateTeamDialog = () => {
  const session = useSession();
  const { data, mutate } = useCreateTeam();

  const form = useForm<CreateTeam>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      group_name: '',
      group_image: 'https://buddy.link/logo.svg',
    },
  });

  async function onSubmit(values: CreateTeam) {
    await mutate(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="primary"
          className={cn('w-fit px-6 py-4', session.status !== 'authenticated' && 'hidden')}
        >
          Create Team
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Create Team</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">&gt; Create a team</DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-2 w-full">
              <FormField
                control={form.control}
                name="group_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="w-full" placeholder="Team name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" variant="destructive">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeamDialog;
