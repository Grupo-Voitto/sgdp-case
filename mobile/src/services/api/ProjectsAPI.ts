import {baseAPI} from './baseAPI';

export type GetProjectsResponse = {
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
}[];

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const response = await baseAPI.get('/projetos');

  return response.data;
};
