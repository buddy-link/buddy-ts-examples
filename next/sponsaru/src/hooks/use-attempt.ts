import { useMutation } from '@tanstack/react-query';
import useUser from './use-user';
import axios from 'axios';
import { useQuests } from './use-quests';
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
  const { refetch } = useQuests();

  return useMutation({
    mutationKey: ['attempt'],
    mutationFn: async (values: Attempt) => {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_ATTEMPT_API_URL + '/attempt',
        headers: {
          user_id: user.data.emailIdentities.userId,
          Accept: 'application/json',
        },
        data: values,
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    onSuccess: async () => {
      //TODO: use instant notifications api to trigger query invalidation and refetch
      setTimeout(async () => {
        await queryClient.invalidateQueries({
          queryKey: ['quests', 'points-history'],
          refetchType: 'all',
        });

        await refetch();
      }, 5000);

      return;
    },
  });
}
