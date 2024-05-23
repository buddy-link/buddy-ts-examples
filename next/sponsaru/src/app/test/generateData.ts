type Node = {
  id: number;
  group: number;
  collapsed: boolean;
  childLinks: any[];
};

type Link = {
  source: number;
  target: number;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

export const generateGraphData = (N: number, numberOfGroups: number): GraphData => {
  const nodes: Node[] = [];
  const links: Link[] = [];
  const nodesPerGroup = Math.floor(N / numberOfGroups);
  let currentNodeId = 0;

  for (let group = 0; group < numberOfGroups; group++) {
    const groupNodes: Node[] = Array.from({ length: nodesPerGroup }, (_, i) => ({
      id: currentNodeId + i,
      collapsed: i !== 0,
      childLinks: [],
      imageUrl: i === 0 ? `/image-1.webp` : '',
      size: i === 0 ? 50 : 1,
      group: group,
    }));

    nodes.push(...groupNodes);

    for (let i = 1; i < groupNodes.length; i++) {
      links.push({
        source: groupNodes[0].id,
        target: groupNodes[i].id,
      });
    }

    currentNodeId += nodesPerGroup;
  }

  // Link parent/children
  const nodesById = Object.fromEntries(nodes.map((node) => [node.id, node]));
  links.forEach((link) => {
    nodesById[link.source].childLinks.push(link);
  });

  return { nodes, links };
};
