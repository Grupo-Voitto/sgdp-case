import {baseAPI} from './baseAPI';

export const getDashboardData = async () => {
  const response = await baseAPI.get('/dashboard-projetos');

  return response.data;
};
