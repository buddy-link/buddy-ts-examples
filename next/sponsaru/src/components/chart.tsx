'use client';

import React, { useEffect } from 'react';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import Sigma from 'sigma';
import { Attributes } from 'graphology-types';
import { ChartProps, Position } from './types';
import { TeamDialog } from './team-dialog';
import { Button } from './ui/button';

const getNextPosition = (prevPosition: Position, prevSize: number, currSize: number): Position => {
  const distance = (prevSize + currSize) / 40; // Adding 5 as a buffer to ensure no overlap
  const angle = Math.random() * 2 * Math.PI; // Random angle
  const x = prevPosition.x + distance * Math.cos(angle);
  const y = prevPosition.y + distance * Math.sin(angle);
  return { x, y };
};

const Chart = ({ nodes }: ChartProps) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
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

    // Event listener to show label on hover
    renderer.on('enterNode', ({ node }) => {
      graph.setNodeAttribute(node, 'label', graph.getNodeAttribute(node, 'originalLabel'));
    });

    renderer.on('clickNode', ({ node }) => {
      setOpen(true);
    });

    // Event listener to hide label when not hovered
    renderer.on('leaveNode', ({ node }) => {
      graph.removeNodeAttribute(node, 'label');
    });

    // Clean up function to prevent memory leaks
    return () => {
      renderer.kill();
    };
  }, []);

  return (
    <>
      <TeamDialog open={open} onClose={() => setOpen(false)} />
      <div className="relative pt-20 rounded-lg overflow-hidden">
        <div id="sigma-container" className=" bg-white rounded-xl" style={{ width: '80vw', height: '80vh' }} />
        <div className="absolute bottom-4 left-4 flex gap-4 items-center justify-start">
          <Button type="button" variant="primary" onClick={() => setOpen(true)}>
            Quests
          </Button>
          <Button type="button" variant="primary" onClick={() => setOpen(true)}>
            Teams
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chart;
