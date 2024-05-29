import { CreateTeam } from '@/components/create-team-dialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';

export const useTeams = () => {
  const { user } = useUser(true);
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev/groups',
        headers: {
          // user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          // 'x-api-key': 'z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs',
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
        url: 'https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev/groups',
        headers: {
          user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          // 'x-api-key': 'z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs',
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
        queryKey: ['teams'],
        refetchType: 'active',
      });
    },
  });
};
