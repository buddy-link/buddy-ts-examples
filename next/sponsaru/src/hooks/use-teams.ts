import { CreateTeam } from '@/components/create-team-dialog';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';
import { toast } from 'sonner';
import { getQueryClient } from '@/providers/react-query-provider';
import { json } from 'd3';
import { useSession } from 'next-auth/react';

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

export const useUserTeams = () => {
  const { user } = useUser(true);
  const session = useSession();

  console.log('session', session);

  return useQuery({
    queryKey: ['user-teams'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:
          process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups?user_id=' + user.data.emailIdentities[0].userId,
        headers: {
          Accept: 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
        },
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    enabled: session.status === 'authenticated',
  });
};

export const useJoinTeam = () => {
  const { user } = useUser(true);
  const queryClient = getQueryClient();
  const email = user.data?.emailIdentities[0].email;

  return useMutation({
    mutationKey: ['join-team'],
    mutationFn: async (teamId: string) => {
      const config = {
        method: 'post',
        url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups/' + teamId,
        headers: {
          // user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
        },
        body: JSON.stringify({
          email,
          // walletPublickey: user.data.walletIdentities[0].walletPublickey,
        }),
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['teams', 'user-teams'],
        refetchType: 'active',
      });
      toast.success('Joined team successfully!');
    },
    onError: () => {
      toast.error('Failed to join team');
    },
  });
};

export const useLeaveTeam = () => {
  const { user } = useUser(true);
  const queryClient = getQueryClient();
  const { refetch } = useUserTeams();

  return useMutation({
    mutationKey: ['leave-team'],
    mutationFn: async (teamId: string) => {
      const config = {
        method: 'delete',
        url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups/' + teamId,
        headers: {
          user_id: user.data.emailIdentities[0].userId,
          Accept: 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
        },
      };

      return axios.request(config).then((response) => {
        return response.data;
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['teams', 'user-teams'],
        refetchType: 'active',
      });
      await refetch();
      toast.success('Left team successfully!');
    },
    onError: () => {
      toast.error('Failed to leave team');
    },
  });
};

export const useCreateTeam = () => {
  const { user } = useUser(true);
  const queryClient = getQueryClient();

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
