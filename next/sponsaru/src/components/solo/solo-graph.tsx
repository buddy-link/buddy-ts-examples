import { useEffect, useMemo } from 'react';
import Graph from 'graphology';
import circlepack from 'graphology-layout/circlepack';
import seedrandom from 'seedrandom';
import Sigma from 'sigma';
import { EdgeLineProgram, EdgeRectangleProgram } from 'sigma/rendering';
import { NodeImageProgram } from '@sigma/node-image';
import { Attributes } from 'graphology-types';
import { MouseCoords } from 'sigma/types';
import { usePoints } from '@/hooks/use-points';

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
  const { topUsersQuery } = usePoints();
  const data = useMemo(() => topUsersQuery.data || [], [topUsersQuery.data]);

  useEffect(() => {
    const rng = seedrandom('sigma');
    const state = {
      ...args,
    };

    const graph = new Graph();

    data.forEach((item: { total: number; name: string }, index: number) => {
      const nodeKey = `node_${index}`;
      graph.addNode(nodeKey, {
        size: item.total / 100,
        color: '#' + Math.floor(rng() * 16777215).toString(16),
        image: '/logo.webp',
        originalLabel: `${item.name}`,
      });
    });

    circlepack.assign(graph, {
      hierarchyAttributes: ['label'],
    });

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

    return () => {
      renderer.kill();
    };
  }, [args, onNodeClick, data]);

  return (
    <div>
      <div id="solo-container" className="bg-white rounded-xl" style={{ width: '100%', height: '80vh' }}></div>
    </div>
  );
};

export default SoloGraph2;
