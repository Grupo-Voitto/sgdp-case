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
