import { useCallback, useEffect } from 'react';
import Graph from 'graphology';
import clusters from 'graphology-generators/random/clusters';

import circlepack from 'graphology-layout/circlepack';
import seedrandom from 'seedrandom';
import Sigma from 'sigma';
import { EdgeLineProgram, EdgeRectangleProgram } from 'sigma/rendering';
import { Node } from './solo-graph';
import { NodeImageProgram } from '@sigma/node-image';
import { Attributes } from 'graphology-types';
import { MouseCoords } from 'sigma/types';

interface SoloGraph2Props {
  args: {
    clusters: number;
    edgesRenderer: string;
    size: number;
    order: number;
  };
  onNodeClick: (graph: Graph<Attributes, Attributes, Attributes>, node: string, event: MouseCoords) => void;
}

const SoloGraph2: React.FC<SoloGraph2Props> = ({ args, onNodeClick }) => {
  useEffect(() => {
    const rng = seedrandom('sigma');
    const state = {
      ...args,
    };

    // 1. Generate a graph:
    const graph = clusters(Graph, { ...state, rng });
    circlepack.assign(graph, {
      hierarchyAttributes: ['cluster'],
    });

    const colors: Record<string, string> = {};
    for (let i = 0; i < +state.clusters; i++) {
      colors[i] = '#' + Math.floor(rng() * 16777215).toString(16);
    }

    let i = 0;
    graph.forEachNode((node, { cluster }) => {
      graph.mergeNodeAttributes(node, {
        size: i / (Math.random() * 100),

        color: colors[cluster + ''],
        image: '/logo.webp',
        hiddenLabel: `Node n°${++i}, in cluster n°${cluster}`,
        originalLabel: `Node n°${++i}, in cluster n°${cluster}`,
      });
    });

    // 2. Render the graph:
    const container = document.getElementById('solo-container') as HTMLElement;
    const renderer = new Sigma(graph, container, {
      defaultEdgeColor: 'rgba(0,0,0,0)',
      defaultEdgeType: state.edgesRenderer,
      edgeProgramClasses: {
        'edges-default': EdgeRectangleProgram,
        'edges-fast': EdgeLineProgram,
      },
      edgeLabelWeight: 'bold',
      defaultNodeType: 'image',

      nodeProgramClasses: {
        image: NodeImageProgram,
      },
    });

    // Cheap trick: tilt the camera a bit to make labels more readable:
    renderer.getCamera().setState({
      angle: 0.2,
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

    // Cleanup function to remove event listeners
    return () => {
      renderer.kill();
    };
  }, [args]);

  return (
    <div>
      <div id="solo-container" className="bg-white rounded-xl" style={{ width: '100%', height: '80vh' }}></div>
    </div>
  );
};

export default SoloGraph2;
