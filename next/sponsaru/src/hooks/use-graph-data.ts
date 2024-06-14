import { useMemo, useState, useEffect, useCallback } from 'react';
import { useTeams } from '@/hooks/use-teams';

import { HistoryEntry, usePoints } from '@/hooks/use-points';
import useUser from '@/hooks/use-user';
import { useSession } from 'next-auth/react';
import { NodeData, Position, Quest } from '@/types/types';
import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import { MouseCoords } from 'sigma/types';
import { useQuest } from './use-quests';

export const useGraphData = () => {
  const [open, setOpen] = useState(false);
  const [selectedTeamNode, setSelectedTeamNode] = useState<NodeData | null>(null);
  const [selectedSoloNode, setSelectedSoloNode] = useState<NodeData | null>(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const session = useSession();

  const { questsQuery } = useQuest();
  const { userPointsHistoryQuery } = usePoints();
  const { teamsQuery, userTeamsQuery } = useTeams();
  const { user } = useUser(true);

  const questsData = questsQuery.data;
  const isQuestsDataLoading = questsQuery.isLoading;

  const userPoints = userPointsHistoryQuery.data;
  const isUserPointsLoading = userPointsHistoryQuery.isLoading;

  const teamsData = teamsQuery.data;
  const isTeamsDataLoading = teamsQuery.isLoading;

  const userTeams = userTeamsQuery.data;
  const isUserTeamsLoading = userTeamsQuery.isLoading;

  const teams = useMemo(() => {
    if (!teamsData || isTeamsDataLoading) return [];
    if (session.status === 'unauthenticated') {
      return teamsData.groups.map(
        (team: { group_name: string; total_members: string; total_points: string; group_image: string }) => ({
          id: team.group_name,
          label: team.group_name,
          members: team.total_members,
          points: team.total_points,
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

  return {
    open,
    selectedTeamNode,
    selectedSoloNode,
    showHowToPlay,
    position,
    teams,
    quests,
    isQuestsDataLoading,
    isUserPointsLoading,
    isTeamsDataLoading,
    isUserTeamsLoading,
    handleTeamNodeClick,
    handleSoloNodeClick,
    onPopoverClose,
  };
};
