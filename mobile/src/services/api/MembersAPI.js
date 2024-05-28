import {baseAPI} from './baseAPI';

export const getMembers = async () => {
  const response = await baseAPI.get('/membros');

  return response.data;
};

export const createMember = async ({role, name}) => {
  const response = await baseAPI.post('/membros', {
    nome: name,
    funcao: role,
  });

  return response.data;
};
