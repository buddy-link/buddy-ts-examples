import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';
import { getQueryClient } from '@/providers/react-query-provider';

export type CreditPoints = {
  value: number;
  reason: string;
};

export type HistoryEntry = {
  created_at: string;
  reason: string;
  source: string;
  value: number;
};

const fetchTopUsers = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + '/points/user/top',
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await axios.request(config);
  return response.data;
};

const fetchTopGroups = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + '/points/group/top',
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await axios.request(config);
  return response.data;
};

const creditPoints = async (userId: string, values: CreditPoints) => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + `/points/user/${userId}`,
    headers: {
      Accept: 'application/json',
    },
    data: values,
  };
  const response = await axios.request(config);
  return response.data;
};

const fetchUserPointsHistory = async (userId: string) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_POINTS_API_URL + `/points/user/${userId}`,
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await axios.request(config);
  return response.data;
};

export const usePoints = () => {
  const queryClient = getQueryClient();
  const { user } = useUser(true);

  const topUsersQuery = useQuery({ queryKey: ['top-users'], queryFn: fetchTopUsers });
  const topGroupsQuery = useQuery({ queryKey: ['top-groups'], queryFn: fetchTopGroups });

  const userPointsHistoryQuery = useQuery({
    queryKey: ['points-history'],
    queryFn: () => fetchUserPointsHistory(user.data.emailIdentities[0].userId),
    enabled: !!user.data?.emailIdentities.length,
  });

  const creditPointsMutation = useMutation({
    mutationFn: (values: CreditPoints) => creditPoints(user.data.emailIdentities[0].userId, values),
  });

  return {
    topUsersQuery,
    topGroupsQuery,
    userPointsHistoryQuery,
    creditPointsMutation,
  };
};
