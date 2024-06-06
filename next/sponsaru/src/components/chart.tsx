'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import { NodeData, Position } from './types';
import Leaderboard from './leaderboard';
import QuestsDialog, { Quest } from './quests-dialog';
import TeamsDialog from './teams-dialog';
import HowToPlayDialog from './how-to-play-dialog';
import { TeamPopover } from './team-popover';
import { useTeams, useUserTeams } from '@/hooks/use-teams';
import { Tabs, TabsContent } from './ui/tabs';
import TeamsGraph from './teams-graph';
import { MouseCoords } from 'sigma/types';
import { SoloPopover } from './solo-popover';
import SoloGraph2 from './solo-graph2';
import { useQuests } from '@/hooks/use-quests';
import useUser from '@/hooks/use-user';
import { HistoryEntry, useUserPointsHistory } from '@/hooks/use-points';
import { useSession } from 'next-auth/react';

const DEFAULT_ARGS = {
  order: 40,
  size: 1,
  clusters: 1,
  edgesRenderer: 'edges-default',
};

export type Team = {
  id: string;
  label: string;
  members: number;
  points: number;
  image: string;
  joined?: boolean;
};

const Chart = () => {
  const [open, setOpen] = useState(false);
  const [selectedTeamNode, setSelectedTeamNode] = useState<NodeData | null>(null);
  const [selectedSoloNode, setSelectedSoloNode] = useState<NodeData | null>(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const session = useSession();

  console.log('session', session);

  const { data: questsData, isLoading: isQuestsDataLoading } = useQuests();
  const { data: userPoints, isLoading: isUserPointsLoading } = useUserPointsHistory();
  const { data: teamsData, isLoading: isTeamsDataLoading } = useTeams();
  const { data: userTeams, isLoading: isUserTeamsLoading } = useUserTeams();

  const { user } = useUser(true);

  // const teams = useMemo(() => {
  //   if (!teamsData || isTeamsDataLoading) return [];

  // }, [isTeamsDataLoading, teamsData]);

  //this memo is merges the teams and userTeams data, adding a joined property to the teams
  const teams = useMemo(() => {
    if (!teamsData || isTeamsDataLoading) return [];
    if (session.status === 'unauthenticated') {
      return teamsData.groups.map(
        (team: { group_name: string; total_members: string; total_points: string; group_image: string }) => ({
          id: team.group_name,
          label: team.group_name,
          members: team.total_members,
          points: team.total_points,
          //TODO: change this to the actual image using {team.group_image}, its necessary to fix allowed domains in next.config.js
          image: '/logo.webp',
        })
      );
    }

    if (!userTeams || isUserTeamsLoading) return [];
    const userTeamsSet = new Set<string>();

    userTeams.groups.forEach((group: { group_name: string }) => {
      userTeamsSet.add(group.group_name);
    });

    return teamsData.groups.map((team: { group_name: string; total_members: string; total_points: string }) => {
      if (userTeamsSet.has(team.group_name)) {
        return {
          id: team.group_name,
          label: team.group_name,
          members: team.total_members,
          points: team.total_points,
          image: '/logo.webp',
          joined: true,
        };
      }
      return {
        id: team.group_name,
        label: team.group_name,
        members: team.total_members,
        points: team.total_points,
        image: '/logo.webp',
        joined: false,
      };
    });
  }, [isTeamsDataLoading, isUserTeamsLoading, session.status, teamsData, userTeams]);

  const quests = useMemo<Quest[]>(() => {
    if (!questsData || isQuestsDataLoading) return [];

    if (session.status === 'unauthenticated') return questsData;

    if (isUserPointsLoading || !userPoints) return [];
    const completedQuests = new Set<string>();

    userPoints.history.forEach((entry: HistoryEntry) => {
      const questName = entry.source.split('_')[1]; // Assumes source follows a certain pattern, adjust if needed
      completedQuests.add(questName);
    });

    return questsData.map((quest: Quest) => {
      if (completedQuests.has(quest.name)) {
        return { ...quest, status: 'completed' };
      }
      return quest;
    });
  }, [isQuestsDataLoading, isUserPointsLoading, questsData, session.status, userPoints]);

  const handleTeamNodeClick = useCallback(
    (graph: Graph<Attributes, Attributes, Attributes>, node: string, event: MouseCoords) => {
      const nodeAttributes = graph.getNodeAttributes(node);

      setSelectedTeamNode({
        id: node,
        label: nodeAttributes.originalLabel,
        members: nodeAttributes.members,
        image: nodeAttributes.image,
        points: nodeAttributes.points,
        joined: nodeAttributes.joined,
      });
      setPosition({
        x: event.x,
        y: event.y,
      });
      setOpen(true);
    },
    []
  );

  const handleSoloNodeClick = useCallback(
    (graph: Graph<Attributes, Attributes, Attributes>, node: string, event: MouseCoords) => {
      const nodeAttributes = graph.getNodeAttributes(node);
      setSelectedSoloNode({
        id: node,
        label: nodeAttributes.originalLabel,
        members: nodeAttributes.size * 4,
        image: nodeAttributes.image,
        points: 0,
      });
      setPosition({
        x: event.x,
        y: event.y,
      });
      setOpen(true);
    },
    []
  );

  const onPopoverClose = useCallback(() => {
    setSelectedSoloNode(null);
    setSelectedTeamNode(null);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!user.isLoading && user.data && user.data?.walletIdentities.length > 0) {
      setShowHowToPlay(true);
    }
  }, [user.isLoading, user.data]);

  return (
    <>
      <Tabs defaultValue="team">
        <div className="relative rounded-lg overflow-hidden" style={{ width: '80vw', height: '80vh' }}>
          {selectedTeamNode && (
            <TeamPopover
              open={!!selectedTeamNode && open}
              onClose={onPopoverClose}
              node={selectedTeamNode}
              position={position}
            />
          )}
          {selectedSoloNode && (
            <SoloPopover
              open={!!selectedSoloNode && open}
              onClose={onPopoverClose}
              node={selectedSoloNode}
              position={position}
            />
          )}

          <div className="absolute top-4 left-4 z-40">{showHowToPlay && <HowToPlayDialog />}</div>
          <TabsContent value="team" className="h-full">
            <TeamsGraph onNodeClick={handleTeamNodeClick} nodes={teams} isLoading={isTeamsDataLoading} />
          </TabsContent>
          <TabsContent value="solo" className="h-full">
            {/* <SoloGraph handleNodeClick={handleSoloNodeClick} /> */}
            <SoloGraph2 args={DEFAULT_ARGS} onNodeClick={handleSoloNodeClick} />
          </TabsContent>
          <div className="absolute top-5 right-5">
            <Leaderboard teamsData={teams} isLoading={isTeamsDataLoading} />
          </div>
          <div className="absolute bottom-4 left-4 flex gap-4 items-center justify-start">
            <QuestsDialog quests={quests} isLoading={isQuestsDataLoading || isUserPointsLoading} />
            <TeamsDialog teams={teams} isLoading={isTeamsDataLoading || isUserTeamsLoading} />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Chart;
