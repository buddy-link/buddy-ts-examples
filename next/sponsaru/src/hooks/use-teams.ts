import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUser from './use-user';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { CreateTeam } from '@/components/group/create-team-dialog';

const fetchTeams = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups',
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
    },
  };

  const response = await axios.request(config);
  return response.data;
};

const fetchUserTeams = async (userId: string) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups?user_id=' + userId,
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
    },
  };

  const response = await axios.request(config);
  return response.data;
};

const joinTeam = async (userId: string, teamId: string, email: string) => {
  const config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups/' + teamId,
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
    },
    data: {
      email,
    },
  };

  const response = await axios.request(config);
  return response.data;
};

const leaveTeam = async (userId: string, teamId: string) => {
  const config = {
    method: 'delete',
    url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups/' + teamId,
    headers: {
      user_id: userId,
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
    },
  };

  const response = await axios.request(config);
  return response.data;
};

const createTeam = async (userId: string, values: CreateTeam) => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BUDDYLINK_GROUPS_API_URL + '/groups',
    headers: {
      user_id: userId,
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_GROUPS_API_KEY,
    },
    data: values,
  };

  const response = await axios.request(config);
  return response.data;
};

export const useTeams = () => {
  const { user } = useUser(true);
  const queryClient = useQueryClient();
  const session = useSession();

  const teamsQuery = useQuery({ queryKey: ['teams'], queryFn: fetchTeams });

  const userTeamsQuery = useQuery({
    queryKey: ['user-teams'],
    queryFn: () => fetchUserTeams(user.data.emailIdentities[0].userId),
    enabled: session.status === 'authenticated',
  });

  const joinTeamMutation = useMutation({
    mutationFn: (teamId: string) =>
      joinTeam(user.data.emailIdentities[0].userId, teamId, user.data.emailIdentities[0].email),

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['teams', 'user-teams'] });
      toast.success('Joined team successfully!');
    },
    onError: () => {
      toast.error('Failed to join team');
    },
  });

  const leaveTeamMutation = useMutation({
    mutationFn: (teamId: string) => leaveTeam(user.data.emailIdentities[0].userId, teamId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['teams', 'user-teams'] });
      await userTeamsQuery.refetch();
      toast.success('Left team successfully!');
    },
    onError: () => {
      toast.error('Failed to leave team');
    },
  });

  const createTeamMutation = useMutation({
    mutationFn: (values: CreateTeam) => createTeam(user.data.emailIdentities[0].userId, values),

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['teams'] });
      toast.success('Team created successfully!');
    },
    onError: () => {
      toast.error('Failed to create team');
    },
  });

  return {
    teamsQuery,
    userTeamsQuery,
    joinTeamMutation,
    leaveTeamMutation,
    createTeamMutation,
  };
};
