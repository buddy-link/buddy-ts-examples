'use client';
import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { generateGraphData } from '@/app/test/generateData';
import { ForceGraphMethods, NodeObject } from 'react-force-graph-2d';

import { NodeData, Position } from './types';
import dynamic from 'next/dynamic';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { forceCollide } from 'd3';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

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

type SoloGraphProps = {
  handleNodeClick: (node: NodeObject) => void;
};

const SoloGraph = ({ handleNodeClick }: SoloGraphProps) => {
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
            traverseTree(targetNode as Node);
          });
        }
      }
    };

    gData.nodes.forEach((node) => {
      if (node.childLinks.length > 0 || !node.collapsed) traverseTree(node as Node);
    });

    return { nodes: visibleNodes, links: visibleLinks };
  }, [gData]);

  const drawNodes = useCallback((node: Node, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.beginPath();
    const radius = 4.1 * 1.4;
    ctx.arc(node?.x ?? 0, node?.y ?? 0, radius, 0, 2 * Math.PI, true);

    ctx.fill();

    const img = new Image();
    img.src = node.imageUrl;
    const size = radius * 10;
    ctx.drawImage(img, (node?.x ?? 0) - size / 2, (node?.y ?? 0) - size / 2, size, size);
    ctx.restore();
  }, []);

  return (
    <>
      <TooltipProvider>
        <ForceGraph2D
          // d3AlphaMin={0.6}
          graphData={getAllNodesAndLinks()}
          nodeAutoColorBy="group"
          linkVisibility={false}
          nodeCanvasObjectMode={(node) => 'before'}
          nodeCanvasObject={(node, ctx) => drawNodes(node as Node, ctx)}
          nodeLabel={(node) => `${node.id}`}
          onNodeClick={handleNodeClick}
          backgroundColor="white"
          enableNodeDrag={false}
          // onNodeHover={handleNodeHover}
        />
      </TooltipProvider>
    </>
  );
};

export default SoloGraph;
