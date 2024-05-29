import { CreateQuest } from '@/components/create-quest-dialog';
import { useMutation, useQuery } from '@tanstack/react-query';
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
          user_id: 'AIDAYEOGDEAXQDTAWY4DO',
          Accept: 'application/json',
          'x-api-key': 'DfamlZxOYS9nY89FHtf7Y5ufMLoJkFDs74YaOss1',
        },
      };

      return axios
        .request(config)
        .then((response) => {
          console.log('useQuests: ', response.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

export const useCreateQuest = () => {
  const { user } = useUser(true);

  console.log('useCreateQuest: ', user.data);

  return useMutation({
    mutationKey: ['quests'],
    mutationFn: async (values: CreateQuest) => {
      values.owner = user.data.emailIdentities[0].userId;
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
          'x-api-key': 'DfamlZxOYS9nY89FHtf7Y5ufMLoJkFDs74YaOss1',
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
  });
};
