import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import { MouseCoords } from 'sigma/types';

export type ChartProps = {
  nodes: NodeData[];
};

export type NodeData = {
  id: string;
  label: string;
  members: number;
  points: number;
  image: string;
  joined?: boolean;
};

export type Position = {
  x: number;
  y: number;
};

export type Quest = {
  name: string;
  status: string;
  config: {
    PointValue: number;
    repeatFrequency: 'none';
    useLastSuccessAsEpoch: boolean;
    MaximumTimeToComplete: number;
    timezone: string;
    repeatLimit: number;
  };
  image: string;
  displayName: string;
  owner: string;
  trigger: {
    type: string;
    provider: string;
    args: Record<string, unknown>;
  };
};

export type QuestsDialogProps = {
  quests: Quest[];
  isLoading: boolean;
};

export type Team = {
  id: string;
  label: string;
  members: number;
  points: number;
  image: string;
  joined?: boolean;
};

export type HistoryEntry = {
  source: string;
};

export type CreditPointsButtonProps = {
  quest: Quest;
};

export type TeamGraphProps = {
  nodes: NodeData[];
  onNodeClick: (graph: Graph<Attributes, Attributes, Attributes>, node: string, event: MouseCoords) => void;
  isLoading: boolean;
};
