import {baseAPI} from './baseAPI';

export type GetMembersResponse = {
  id: number;
  nome: string;
  funcao: string;
  created_at: string;
}[];

export const getMembers = async (): Promise<GetMembersResponse> => {
  const response = await baseAPI.get('/membros');

  return response.data;
};
