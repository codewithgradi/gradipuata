import type { Personal } from "./Personal";

export interface Education {
  id: number;
  institution: string;
  qualification: string;
  fromYear: number;
  toYear: number;
  updatedAt: Date;
  personalId: number;
  personal: Personal;
}
