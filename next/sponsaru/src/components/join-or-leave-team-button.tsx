import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Team } from './chart';
import { useJoinTeam, useLeaveTeam } from '@/hooks/use-teams';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';

export default function JoinOrLeaveTeamButton({ team }: { team: Team }) {
  console.log('team', team);

  const { mutate: leaveTeam, isPending: isLeaveTeamPending } = useLeaveTeam();
  const { mutate: joinTeam, isPending: isJoinTeamPending } = useJoinTeam();
  const session = useSession();

  const joinOrLeaveTeamHandler = useCallback(
    async (team: Team) => {
      if (team.joined) {
        await leaveTeam(team.id);
      } else {
        await joinTeam(team.id);
      }
    },
    [joinTeam, leaveTeam]
  );

  return (
    <Button
      variant={team.joined ? 'destructive' : 'primary'}
      className={cn('text-white gap-2 px-6 py-4 ')}
      onClick={async () => await joinOrLeaveTeamHandler(team)}
      disabled={isJoinTeamPending || isLeaveTeamPending || session.status !== 'authenticated'}
    >
      {isJoinTeamPending || isLeaveTeamPending ? 'loading' : team.joined ? 'Leave' : 'Join'}
    </Button>
  );
}
