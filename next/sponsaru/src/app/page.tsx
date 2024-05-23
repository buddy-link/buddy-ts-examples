import React from 'react';
import Chart from '@/components/chart';
import { nodes } from '@/components/data';

export default function Home() {
  const randomTree = genRandomTree(5000, false);
  return (
    <main className="flex flex-col items-center justify-between ">
      <Chart />
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
