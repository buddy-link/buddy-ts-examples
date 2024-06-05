import { CreateTeam } from '@/components/create-team-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';
import { toast } from 'sonner';

export const useTeams = () => {
  const { user } = useUser(true);
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups',
        headers: {
          // user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
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
};

export const useCreateTeam = () => {
  const { user } = useUser(true);
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['teams'],
    mutationFn: async (values: CreateTeam) => {
      if (!user.data.emailIdentities) {
        return;
      }
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups',
        headers: {
          user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
        },
        data: values,
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['teams'],
        refetchType: 'active',
      });
      toast.success('Team created successfully!');
    },
    onError: () => {
      toast.error('Failed to create team');
    },
  });
};
