import { useMutation } from '@tanstack/react-query';
import useUser from './use-user';
import axios from 'axios';
import { useQuest } from './use-quests';
import { getQueryClient } from '@/providers/react-query-provider';

type Attempt = {
  questID: string;
  userID: string;
  args: {
    [key: string]: string;
  };
};

export function useAttempt() {
  const { user } = useUser(true);
  const queryClient = getQueryClient();
  const { questsQuery } = useQuest();

  return useMutation({
    mutationKey: ['attempt'],
    mutationFn: async (values: Attempt) => {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_ATTEMPT_API_URL + '/attempt',
        headers: {
          user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
        },
        data: values,
      };

      const response = await axios.request(config);
      return response.data;
    },
    onSuccess: async () => {
      // Use instant notifications API to trigger query invalidation and refetch
      setTimeout(async () => {
        await queryClient.invalidateQueries({ queryKey: ['quests', 'points-history'] });
        await questsQuery.refetch();
      }, 5000);
    },
  });
}
