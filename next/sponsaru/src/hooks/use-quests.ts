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
        url: 'https://e9xc9ftx7l.execute-api.us-east-1.amazonaws.com/dev/quests',
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

      console.log('useCreateQuest: ', values);

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://e9xc9ftx7l.execute-api.us-east-1.amazonaws.com/dev/quests',
        headers: {
          user_id: user.data.emailIdentities.userId,
          Accept: 'application/json',
        },
        data: values,
      };

      return axios
        .request(config)
        .then((response) => {
          console.log('useCreateQuest: ', response.data);
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
