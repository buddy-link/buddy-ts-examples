'use client';

import React, { useEffect, useState } from 'react';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import Sigma from 'sigma';
import { Attributes } from 'graphology-types';
import { ChartProps, NodeData, Position } from './types';
import Leaderboard from './leaderboard';
import axios from 'axios';
import QuestsDialog from './quests-dialog';
import TeamsDialog from './teams-dialog';
import HowToPlayDialog from './how-to-play-dialog';
import { TeamPopover } from './team-popover';
import { useTeams } from '@/hooks/use-teams';

const getNextPosition = (prevPosition: Position, prevSize: number, currSize: number): Position => {
  const distance = (prevSize + currSize) / 40;
  const angle = Math.random() * 2 * Math.PI;
  const x = prevPosition.x + distance * Math.cos(angle);
  const y = prevPosition.y + distance * Math.sin(angle);
  return { x, y };
};

const Chart = ({ nodes }: ChartProps) => {
  const [open, setOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const { data } = useTeams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = document.getElementById('sigma-container') as HTMLElement;
      if (!container) {
        console.error('Sigma container not found');
        return;
      }

      const graph = new Graph();

      let prevPosition = { x: 0, y: 0 };
      let prevSize = nodes[0].members;

      nodes.forEach((node, index) => {
        let position;
        if (index === 0) {
          position = prevPosition;
        } else {
          position = getNextPosition(prevPosition, prevSize, node.members);
          prevPosition = position;
          prevSize = node.members;
        }
        graph.addNode(node.id, {
          ...position,
          size: node.members / 4,
          image: node.image,
          hiddenLabel: node.label,
          originalLabel: node.label,
        } as Attributes);
      });

      const renderer = new Sigma(graph, container, {
        defaultNodeType: 'image',
        nodeProgramClasses: {
          image: NodeImageProgram,
        },
      });

      renderer.on('enterNode', ({ node }) => {
        graph.setNodeAttribute(node, 'label', graph.getNodeAttribute(node, 'originalLabel'));
      });

      renderer.on('clickNode', ({ node, event }) => {
        const nodeAttributes = graph.getNodeAttributes(node);
        setSelectedNode({
          id: node,
          label: nodeAttributes.originalLabel,
          members: nodeAttributes.size * 4,
          image: nodeAttributes.image,
        });
        setPosition({
          x: event.x,
          y: event.y,
        });
        setOpen(true);
      });

      renderer.on('leaveNode', ({ node }) => {
        graph.removeNodeAttribute(node, 'label');
      });

      return () => {
        renderer.kill();
      };
    }
  }, [nodes]);

  return (
    <>
      <div className="relative rounded-lg overflow-hidden" style={{ width: '80vw', height: '80vh' }}>
        {selectedNode && (
          <TeamPopover open={open} onClose={() => setOpen(false)} node={selectedNode} position={position} />
        )}
        <div className="absolute top-4 left-4 z-40">
          <HowToPlayDialog />
        </div>
        <div id="sigma-container" className="bg-white rounded-xl" style={{ width: '100%', height: '100%' }} />
        <div className="absolute top-5 right-5">
          <Leaderboard />
        </div>
        <div className="absolute bottom-4 left-4 flex gap-4 items-center justify-start">
          <QuestsDialog />
          <TeamsDialog />
        </div>
      </div>
    </>
  );
};

export default Chart;
