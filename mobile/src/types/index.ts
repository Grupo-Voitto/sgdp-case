export interface ProjectArea {
  id: string | number;
  name: string;
  color: string;
}

export interface Project {
  id: string | number;
  name: string;
  progressInPercent: number;
  area: ProjectArea;
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
}

export interface ProjectInfo extends Project {
  expiresIn: string;
  description: string;
  members: ProjectMember[];
  tasks: ProjectTask[];
}
