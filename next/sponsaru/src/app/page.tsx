import React from 'react';
import Chart from '@/components/chart';
import { nodes } from '@/components/data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Chart nodes={nodes} />
    </main>
  );
}
