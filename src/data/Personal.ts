import type { Education } from "./Education";
import type { Experience } from "./Experience";
import type { Project } from "./Project";

export interface Personal {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  image: string;
  bio: string;

  hobbies: string[];
  skills: string[];
  programmingLanguages: string[];
  techStack: string[];
  socials: Social[];

  updatedAt: Date;

  experienceId: number;
  projectId: number;
  educationIdId: number;
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}

export interface Social {
  plateform: string;
  link: string;
}
