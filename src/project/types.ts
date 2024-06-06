import { Member } from "../member/types";

export interface ProjectSlice {
  projects: Array<Project>;
  getAllProjects: () => Promise<void>;
  project: Project | null;
  getProject: (id: string) => Promise<boolean>;

  createProject: (
    name: string,
    objective: string,
    description: string
  ) => Promise<boolean>;

  updateProject: (
    name: string,
    objective: string,
    description: string,
    id: string
  ) => Promise<boolean>;

  deleteProject: (id: string) => Promise<boolean>;
}

interface Project {
  name: string;
  description: string;
  objective: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  member: Array<Member>;
  id: string;
}
