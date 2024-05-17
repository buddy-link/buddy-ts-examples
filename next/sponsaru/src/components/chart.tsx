'use client';

import React, { useEffect, useState } from 'react';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import Sigma from 'sigma';
import { Attributes } from 'graphology-types';
import { ChartProps, Position } from './types';
import { TeamDialog } from './team-dialog';
import { Button } from './ui/button';
import { JoystickIcon, TeamsIcon } from '@/assets/icons';
import Leaderboard from './leaderboard';
import axios from 'axios';
import QuestsDialog from './quests-dialog';
import TeamsDialog from './teams-dialog';

const getNextPosition = (prevPosition: Position, prevSize: number, currSize: number): Position => {
  const distance = (prevSize + currSize) / 40; // Adding 5 as a buffer to ensure no overlap
  const angle = Math.random() * 2 * Math.PI; // Random angle
  const x = prevPosition.x + distance * Math.cos(angle);
  const y = prevPosition.y + distance * Math.sin(angle);
  return { x, y };
};

const Chart = ({ nodes }: ChartProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev//groups',
      headers: {
        user_id: 'AIDAYEOGDEAXQDTAWY4DO',
        Accept: 'application/json',
        'x-api-key': 'z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs',
      },
    };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'https://3crw129z4f.execute-api.us-east-1.amazonaws.com/dev//points/AIDAYEOGDEAXQDTAWY4DO',
    //   headers: {
    //     user_id: 'AIDAYEOGDEAXQDTAWY4DO',
    //     Accept: 'application/json',
    //     'x-api-key': 'RlaCE1zR1uaemLdMguydX5yS8pqcNex674tT3CJb',
    //   },
    // };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

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
    }
  }, [nodes]);

  return (
    <>
      <TeamDialog open={open} onClose={() => setOpen(false)} />
      <div className="relative rounded-lg overflow-hidden">
        <div id="sigma-container" className="bg-white rounded-xl" style={{ width: '80vw', height: '80vh' }} />

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
