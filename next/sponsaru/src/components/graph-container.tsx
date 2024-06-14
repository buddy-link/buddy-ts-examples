'use client';

import React from 'react';
import { useGraphData } from '@/hooks/use-graph-data';
import Leaderboard from './leaderboard/leaderboard';
import QuestsDialog from './quest/quests-dialog';
import TeamsDialog from './group/teams-dialog';
import HowToPlayDialog from './how-to-play-dialog';
import { TeamPopover } from './group/team-popover';
import { Tabs, TabsContent } from './ui/tabs';
import TeamsGraph from './group/teams-graph';
import { SoloPopover } from './solo/solo-popover';
import SoloGraph from './solo/solo-graph';

export const DEFAULT_ARGS = {
  order: 40,
  size: 1,
  clusters: 1,
  edgesRenderer: 'edges-default',
};

const GraphContainer = () => {
  const {
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
  } = useGraphData();

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
            <SoloGraph args={DEFAULT_ARGS} onNodeClick={handleSoloNodeClick} />
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

export default GraphContainer;
