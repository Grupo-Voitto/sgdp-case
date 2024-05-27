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
