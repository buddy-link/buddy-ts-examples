import { useEffect } from 'react';
import Graph from 'graphology';
import clusters from 'graphology-generators/random/clusters';

import circlepack from 'graphology-layout/circlepack';
import seedrandom from 'seedrandom';
import Sigma from 'sigma';
import { EdgeLineProgram, EdgeRectangleProgram } from 'sigma/rendering';

const DEFAULT_ARGS = {
  order: 500,
  size: 2000,
  clusters: 5,
  edgesRenderer: 'edges-default',
};

interface SoloGraph2Props {
  args: typeof DEFAULT_ARGS;
}

const SoloGraph2: React.FC<SoloGraph2Props> = ({ args }) => {
  useEffect(() => {
    const rng = seedrandom('sigma');
    const state = {
      ...DEFAULT_ARGS,
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
        size: graph.degree(node) / 3,
        label: `Node n°${++i}, in cluster n°${cluster}`,
        color: colors[cluster + ''],
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
    });

    // Cheap trick: tilt the camera a bit to make labels more readable:
    renderer.getCamera().setState({
      angle: 0.2,
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
