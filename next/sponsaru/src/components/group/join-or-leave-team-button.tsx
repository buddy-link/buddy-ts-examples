import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useTeams } from '@/hooks/use-teams';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Team } from '@/types/types';

export default function JoinOrLeaveTeamButton({ team }: { team: Team }) {
  console.log('team', team);
  const { leaveTeamMutation, joinTeamMutation } = useTeams();

  const session = useSession();

  const joinOrLeaveTeamHandler = useCallback(
    async (team: Team) => {
      if (team.joined) {
        await leaveTeamMutation.mutate(team.id);
      } else {
        await joinTeamMutation.mutate(team.id);
      }
    },
    [joinTeamMutation, leaveTeamMutation]
  );

  return (
    <Button
      variant={team.joined ? 'destructive' : 'primary'}
      className={cn('text-white gap-2 px-6 py-4 ')}
      onClick={async () => await joinOrLeaveTeamHandler(team)}
      disabled={joinTeamMutation.isPending || leaveTeamMutation.isPending || session.status !== 'authenticated'}
    >
      {joinTeamMutation.isPending || leaveTeamMutation.isPending ? 'loading' : team.joined ? 'Leave' : 'Join'}
    </Button>
  );
}
