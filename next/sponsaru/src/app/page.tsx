import GraphContainer from '@/components/graph-container';
import React from 'react';

export default function Home() {
  const randomTree = genRandomTree(5000, false);
  return (
    <main className="flex flex-col items-center justify-between ">
      <GraphContainer />
    </main>
  );
}

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  };
}
