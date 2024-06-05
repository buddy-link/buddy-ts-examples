import { CreateQuest } from '@/components/create-quest-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';

export const useQuests = () =>
  useQuery({
    queryKey: ['quests'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_QUESTS_API_URL + '/quests',
        headers: {
          Accept: 'application/json',
        },
      };

      return axios
        .request(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

export const useCreateQuest = () => {
  const { user } = useUser(true);
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-quest'],
    mutationFn: async (values: CreateQuest) => {
      // if (!user.data.emailIdentities[0].userId) {
      //   return;
      // }
      values.owner = user.data.emailIdentities[0].userId ?? '';
      values.trigger = {
        type: 'social',
        provider: 'twitter',
        args: {
          content: 'test content',
          operator: 'include_content',
          profile: '...',
        },
      };

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_QUESTS_API_URL + '/quests',
        headers: {
          user_id: user.data.emailIdentities.userId,
          Accept: 'application/json',
        },
        data: values,
      };

      return axios
        .request(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['quests'],
        refetchType: 'active',
      });
    },
  });
};
