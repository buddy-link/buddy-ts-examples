export type NodeData = {
  id: string;
  label: string;
  image: string;
  members: number;
};

export type Position = {
  x: number;
  y: number;
};

export type ChartProps = {
  nodes: NodeData[];
};
