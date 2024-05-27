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

export type CreateMemberParams = {
  name: string;
  role: string;
};

export type CreateMemberResponse = {};

export const createMember = async ({
  role,
  name,
}: CreateMemberParams): Promise<CreateMemberResponse> => {
  const response = await baseAPI.post('/membros', {
    name,
    role,
  });

  return response.data;
};
