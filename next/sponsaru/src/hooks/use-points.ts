import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';

export type CreditPoints = {
  value: number;
  reason: string;
};

export const useTopUsers = () =>
  useQuery({
    queryKey: ['top-users'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + '/points/user/top',
        headers: {
          Accept: 'application/json',
        },
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
  });

export const useTopGroups = () =>
  useQuery({
    queryKey: ['top-groups'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + '/points/group/top',
        headers: {
          Accept: 'application/json',
        },
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
  });

export const usePoints = () => {
  const queryClient = useQueryClient();
  const { user } = useUser(true);

  return useMutation({
    mutationKey: ['points'],
    mutationFn: async (values: CreditPoints) => {
      if (!user.data.emailIdentities.length) {
        throw new Error('User not found');
      }

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + `/points/user/${user.data.emailIdentities[0].userId}`,
        headers: {
          Accept: 'application/json',
        },
        data: values,
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['points'],
        refetchType: 'active',
      });
    },
  });
};

// Group
// https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev/
// z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs

// Point
// https://3crw129z4f.execute-api.us-east-1.amazonaws.com/dev/
// RlaCE1zR1uaemLdMguydX5yS8pqcNex674tT3CJb

// Quest Attempt
// https://0rcgwqmea8.execute-api.us-east-1.amazonaws.com/dev/
// fJ6VTc0kPR6Go2JAbELJR5iBcpuKC1H45OtPVsAC

// Quest Management API
// https://e9xc9ftx7l.execute-api.us-east-1.amazonaws.com/dev/
// DfamlZxOYS9nY89FHtf7Y5ufMLoJkFDs74YaOss1
