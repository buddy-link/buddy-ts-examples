'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { generateGraphData } from '@/app/test/generateData';
import { NodeObject } from 'react-force-graph-2d';
import HowToPlayDialog from './how-to-play-dialog';
import Leaderboard from './leaderboard';
import QuestsDialog from './quests-dialog';
import { TeamPopover } from './team-popover';
import TeamsDialog from './teams-dialog';
import { NodeData, Position } from './types';

export type Node = {
  id: number | string;
  collapsed: boolean;
  childLinks: Link[];
  imageUrl: string;
  size: number;
  group: number;
  x?: number;
  y?: number;
  label?: string;
  members?: number;
  image?: string;
} & NodeData;

type Link = {
  source: number;
  target: number;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

const ForceGraphComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const N = 2000;
  const numberOfGroups = 17;
  const gData = useMemo(() => generateGraphData(N, numberOfGroups), [N, numberOfGroups]);

  const getAllNodesAndLinks = useCallback(() => {
    const visibleNodes: Node[] = [];
    const visibleLinks: Link[] = [];

    const nodesById = Object.fromEntries(gData.nodes.map((node) => [node.id, node]));

    const traverseTree = (node: Node) => {
      if (!visibleNodes.includes(node)) {
        visibleNodes.push(node);
        if (!node.collapsed) {
          node.childLinks.forEach((link) => {
            visibleLinks.push(link);
            const targetNode = typeof link.target === 'object' ? link.target : nodesById[link.target];
            traverseTree(targetNode);
          });
        }
      }
    };

    gData.nodes.forEach((node) => {
      if (node.childLinks.length > 0 || !node.collapsed) traverseTree(node);
    });

    return { nodes: visibleNodes, links: visibleLinks };
  }, [gData]);

  const drawNodes = useCallback((node: Node, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.beginPath();
    const radius = 4.1 * 1.4;
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, true);
    ctx.fill();

    const img = new Image();
    img.src = node.imageUrl;
    const size = radius * 10;
    ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size, size);
    ctx.restore();
  }, []);

  const handleNodeClick = useCallback((node: NodeObject, event: MouseEvent) => {
    setSelectedNode((prevSelectedNode) => {
      if (prevSelectedNode?.id === node.id) return prevSelectedNode;

      return {
        id: `${node?.id}` ?? '',
        label: 'aaaaa',
        members: node.size * 4,
        image: node.imageUrl,
        ...node,
      };
    });

    setPosition({
      x: event.clientX,
      y: event.clientY,
    });

    setOpen(true);
  }, []);

  return (
    <>
      <div className="relative rounded-lg overflow-hidden" style={{ width: '80vw', height: '80vh' }}>
        {selectedNode && (
          <TeamPopover open={open} onClose={() => setOpen(false)} node={selectedNode} position={position} />
        )}
        <div className="absolute top-4 left-4 z-40">
          <HowToPlayDialog />
        </div>
        <ForceGraph2D
          d3AlphaMin={0.6}
          graphData={getAllNodesAndLinks()}
          nodeAutoColorBy="group"
          linkVisibility={false}
          nodeCanvasObjectMode={() => 'after'}
          nodeCanvasObject={drawNodes}
          onNodeClick={handleNodeClick}
          width={window.innerWidth * 0.8}
          height={window.innerHeight * 0.8}
          backgroundColor="white"
        />
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

export default ForceGraphComponent;
