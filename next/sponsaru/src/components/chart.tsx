'use client';

import React, { useCallback, useMemo, useState } from 'react';
import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import { NodeData, Position } from './types';
import Leaderboard from './leaderboard';
import QuestsDialog from './quests-dialog';
import TeamsDialog from './teams-dialog';
import HowToPlayDialog from './how-to-play-dialog';
import { TeamPopover } from './team-popover';
import { useTeams } from '@/hooks/use-teams';
import { Tabs, TabsContent } from './ui/tabs';
import TeamsGraph from './teams-graph';
import { MouseCoords } from 'sigma/types';
import { SoloPopover } from './solo-popover';
import SoloGraph2 from './solo-graph2';

const DEFAULT_ARGS = {
  order: 80,
  size: 1,
  clusters: 3,
  edgesRenderer: 'edges-default',
};

const Chart = () => {
  const [open, setOpen] = useState(false);
  const [selectedTeamNode, setSelectedTeamNode] = useState<NodeData | null>(null);
  const [selectedSoloNode, setSelectedSoloNode] = useState<NodeData | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const { data: teamsData, isLoading: isTeamsDataLoading } = useTeams();

  const teams = useMemo(() => {
    if (!teamsData || isTeamsDataLoading) return [];
    return teamsData.groups.map((team: { group_name: string; total_members: string; total_points: string }) => ({
      id: team.group_name,
      label: team.group_name,
      members: team.total_members,
      points: team.total_points,
      image: '/logo.webp',
    }));
  }, [isTeamsDataLoading, teamsData]);

  console.log('teams', teams);

  const handleTeamNodeClick = useCallback(
    (graph: Graph<Attributes, Attributes, Attributes>, node: string, event: MouseCoords) => {
      const nodeAttributes = graph.getNodeAttributes(node);
      console.log('nodeAttributes', nodeAttributes);

      setSelectedTeamNode({
        id: node,
        label: nodeAttributes.originalLabel,
        members: nodeAttributes.members,
        image: nodeAttributes.image,
        points: nodeAttributes.points,
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

          <div className="absolute top-4 left-4 z-40">
            <HowToPlayDialog />
          </div>
          <TabsContent value="team" className="h-full">
            <TeamsGraph onNodeClick={handleTeamNodeClick} nodes={teams} isLoading={isTeamsDataLoading} />
          </TabsContent>
          <TabsContent value="solo" className="h-full">
            {/* <SoloGraph handleNodeClick={handleSoloNodeClick} /> */}
            <SoloGraph2 args={DEFAULT_ARGS} onNodeClick={handleSoloNodeClick} />
          </TabsContent>
          <div className="absolute top-5 right-5">
            <Leaderboard />
          </div>
          <div className="absolute bottom-4 left-4 flex gap-4 items-center justify-start">
            <QuestsDialog />
            <TeamsDialog />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Chart;
