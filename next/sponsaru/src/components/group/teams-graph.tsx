import { useEffect, Attributes } from 'react';
import Graph from 'graphology';
import Sigma from 'sigma';
import { NodeImageProgram } from '@sigma/node-image';
import { Position, TeamGraphProps } from '@/types/types';

const TeamsGraph = ({ nodes, onNodeClick, isLoading }: TeamGraphProps) => {
  useEffect(() => {
    if (nodes.length === 0 || isLoading) return;
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
          prevSize = node.points >= 1000 ? node.points / 1000 : 10;
        }
        graph.addNode(node.id, {
          ...position,
          size: node.points >= 1000 ? node.points / 1000 : 10,
          image: node.image,
          hiddenLabel: node.label,
          originalLabel: node.label,
          points: node.points,
          members: node.members,
          joined: node.joined,
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
        onNodeClick(graph, node, event);
      });

      renderer.on('leaveNode', ({ node }) => {
        graph.removeNodeAttribute(node, 'label');
      });

      return () => {
        renderer.kill();
      };
    }
  }, [nodes, isLoading]);

  return <div id="sigma-container" className="bg-white rounded-xl" style={{ width: '100%', height: '80vh' }} />;
};

export default TeamsGraph;

const getNextPosition = (prevPosition: Position, prevSize: number, currSize: number): Position => {
  const distanceMultiplier = 10;
  const distance = ((prevSize + currSize) * distanceMultiplier) / 40;
  const angle = Math.random() * 2 * Math.PI;
  const x = prevPosition.x + distance * Math.cos(angle);
  const y = prevPosition.y + distance * Math.sin(angle);
  return { x, y };
};
