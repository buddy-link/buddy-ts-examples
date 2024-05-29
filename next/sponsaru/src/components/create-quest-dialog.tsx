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
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateQuest } from '@/hooks/use-quests';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  config: z.object({
    pointValue: z.number().int(),
    repeatFrequency: z.string(),
    useLastSuccessAsEpoch: z.boolean(),
    MaximumTimeToComplete: z.number().int(),
    timezone: z.string(),
    repeatLimit: z.number().int(),
  }),
  image: z.string(),
  displayName: z.string(),
  owner: z.string(),
  trigger: z.object({
    type: z.string(),
    provider: z.string(),
    args: z.record(z.unknown()),
  }),
});

export type CreateQuest = z.infer<typeof formSchema>;

const CreateQuestDialog = () => {
  const { data, mutate } = useCreateQuest();

  console.log('quest', data);

  const form = useForm<CreateQuest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      config: {
        pointValue: 0,
        repeatFrequency: 'daily',
        useLastSuccessAsEpoch: false,
        MaximumTimeToComplete: 0,
        timezone: '0:00',
        repeatLimit: 0,
      },
      image: '',
      displayName: '',
      owner: '',
      trigger: {
        type: '',
        provider: '',
        args: {},
      },
    },
  });

  async function onSubmit(values: CreateQuest) {
    await mutate(values);
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="primary" className="text-white gap-2 px-6 py-4">
          Create
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-5xl">Create Quest</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-bold">&gt; Create a quest</DialogDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="grid grid-cols-4 gap-2 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="w-full" placeholder="Quest name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="owner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Owner</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <FormField
                control={form.control}
                name="config.pointValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Point Value</FormLabel>
                    <FormControl>
                      <Controller
                        name="config.pointValue"
                        control={form.control}
                        render={({ field }) => (
                          <Input
                            type="number"
                            value={field.value}
                            onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="config.repeatFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat Frequency</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="config.MaximumTimeToComplete"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Time To Complete</FormLabel>
                    <FormControl>
                      <Controller
                        name="config.MaximumTimeToComplete"
                        control={form.control}
                        render={({ field }) => (
                          <Input
                            type="number"
                            value={field.value}
                            onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="config.timezone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timezone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="config.repeatLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat Limit</FormLabel>
                    <FormControl>
                      <Controller
                        name="config.repeatLimit"
                        control={form.control}
                        render={({ field }) => (
                          <Input
                            type="number"
                            value={field.value}
                            onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="primary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuestDialog;
