import type { Personal } from "./Personal";

export interface Experience {
  id: number;
  fromYear: number;
  toYear: number;
  comapany: string;
  role: string;
  currentlyHere :boolean;
  updatedAt: Date;
  personalId: number;
  personal: Personal;
}
