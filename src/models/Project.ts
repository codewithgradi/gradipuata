import type { Personal } from "./Personal";

export interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  github: string;
  liveDemo: string;
  tools: string[];
  updatedAt: Date;
  personal: Personal;
  personalId: number;
}
