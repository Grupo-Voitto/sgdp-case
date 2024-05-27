import {ProjectStatus} from 'src/types';
import {baseAPI} from './baseAPI';

export interface GetProjectsResponse {
  concluidos: {
    id_projeto: number;
    titulo: string;
    total_tarefas: number;
    tarefas_concluidas: number;
    status: number;
    progresso: string;
    area: {
      id: number;
      description: string;
      color: string;
    };
  }[];
  em_andamento: {
    id_projeto: number;
    titulo: string;
    total_tarefas: number;
    tarefas_concluidas: number;
    status: number;
    progresso: string;
    area: {
      id: number;
      description: string;
      color: string;
    };
  }[];
  congelado: {
    id_projeto: number;
    titulo: string;
    total_tarefas: number;
    tarefas_concluidas: number;
    status: number;
    progresso: string;
    area: {
      id: number;
      description: string;
      color: string;
    };
  }[];
}

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const response = await baseAPI.get('/projetos');

  return response.data;
};

interface GetProjectDetailResponse {
  id_projeto: number;
  titulo: string;
  descricao: string;
  status: 0;
  dead_line: string;
  data_inicio: string;
  area: {
    id: number;
    description: string;
    color: string;
  };
  membros: {
    id: number;
    nome: string;
    funcao: string;
    created_at: string;
  }[];
  tarefas: {
    id: number;
    description: string;
    status: number;
    id_membro: number;
    id_projeto: number;
    created_at: string;
    updated_at: string;
  }[];
  progresso: string;
}

export const getProjectDetail = async ({
  projectID,
}: {
  projectID: number;
}): Promise<GetProjectDetailResponse> => {
  const response = await baseAPI.get(`/projetos/${projectID}`);

  return response.data;
};

export interface ChangeProjectStatusParams {
  projectID: number;
  status: ProjectStatus;
}

export interface ChangeProjectStatusResponse {}

export const changeProjectStatus = async ({
  projectID,
  status,
}: ChangeProjectStatusParams): Promise<ChangeProjectStatusResponse> => {
  const response = await baseAPI.put(`/projetos/${projectID}`, {
    data: {
      status,
    },
  });

  return response.data;
};

export interface ChangeProjectTaskStatusParams {
  projectID: number;
  taskID: number;
  done: boolean;
}

export interface ChangeProjectTaskStatusResponse {}

export const changeProjectTaskStatus = async ({
  projectID,
  taskID,
  done,
}: ChangeProjectTaskStatusParams): Promise<
  ChangeProjectTaskStatusResponse | undefined
> => {
  console.log('Implementar o endpoint para atualizar a tarefa');

  return;
};
