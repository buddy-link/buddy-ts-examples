import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';
import { getQueryClient } from '@/providers/react-query-provider';
import { CreateQuest } from '@/components/quest/create-quest-dialog';

const fetchQuests = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_QUESTS_API_URL + '/quests',
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await axios.request(config);
  return response.data;
};

const createQuest = async (userId: string, values: CreateQuest) => {
  values.owner = userId;
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
      user_id: userId,
      Accept: 'application/json',
    },
    data: values,
  };

  const response = await axios.request(config);
  return response.data;
};

export const useQuest = () => {
  const { user } = useUser(true);
  const queryClient = getQueryClient();

  const questsQuery = useQuery({ queryKey: ['quests'], queryFn: fetchQuests });

  const createQuestMutation = useMutation({
    mutationFn: (values: CreateQuest) => createQuest(user.data.emailIdentities[0].userId, values),
    mutationKey: ['create-quest'],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['quests'],
        refetchType: 'active',
      });
    },
  });

  return {
    questsQuery,
    createQuestMutation,
  };
};
