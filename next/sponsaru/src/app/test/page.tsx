import GroupForceGraph from '@/components/force-graph';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Group Force Graph</title>
        <meta name="description" content="Force graph with groups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen">
        <GroupForceGraph />
      </main>
    </div>
  );
};

export default Home;
