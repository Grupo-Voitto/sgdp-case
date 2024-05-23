export interface ProjectArea {
  id: string;
  name: string;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  progressInPercent: number;
  area: ProjectArea;
}

export interface ProjectMember {
  id: string;
  name: string;
  role: string;
}

export interface ProjectTask {
  id: string;
  description: string;
  done: boolean;
}

export interface ProjectInfo extends Project {
  expiresIn: string;
  description: string;
  members: ProjectMember[];
  tasks: ProjectTask[];
}
