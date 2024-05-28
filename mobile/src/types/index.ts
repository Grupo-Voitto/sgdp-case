export interface ProjectArea {
  id: string | number;
  name: string;
  color: string;
}

export enum ProjectStatus {
  FROZEN = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
}

export interface Project {
  id: string | number;
  name: string;
  progressInPercent: number;
  area: ProjectArea;
  status: ProjectStatus;
}

export interface ProjectMember {
  id: string | number;
  name: string;
  role: string;
}

export interface ProjectTask {
  id: string | number;
  description: string;
  done: boolean;
  updatedAt?: string;
}

export interface ProjectInfo extends Project {
  expiresIn: string;
  description: string;
}
