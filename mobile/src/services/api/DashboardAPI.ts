import {baseAPI} from './baseAPI';

export interface GetDashbordDataResponse {
  top_projetos: {
    id_projeto: number;
    titulo: string;
    total_tarefas: number;
    tarefas_concluidas: number;
    status: number;
    area: {
      id: number;
      description: string;
      color: string;
    };
    progresso: number;
  }[];
  em_andamento: {
    id_projeto: number;
    titulo: string;
    total_tarefas: number;
    tarefas_concluidas: number;
    status: number;
    area: {
      id: number;
      description: string;
      color: string;
    };
    progresso: number;
  }[];
  grafico: {
    concluidos: number;
    andamento: number;
  };
}

export const getDashboardData = async (): Promise<GetDashbordDataResponse> => {
  const response = await baseAPI.get('/dashboard-projetos');

  return response.data;
};
