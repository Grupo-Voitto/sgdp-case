import {baseAPI} from './baseAPI';

export const getProjects = async () => {
  const response = await baseAPI.get('/projetos');

  return response.data;
};

export const getProjectDetail = async ({projectID}) => {
  const response = await baseAPI.get(`/projetos/${projectID}`);

  return response.data;
};

export const changeProjectStatus = async ({projectID, status}) => {
  const response = await baseAPI.put(`/projetos/${projectID}`, {
    data: {
      status,
    },
  });

  return response.data;
};

export const changeProjectTaskStatus = async ({projectID, taskID, done}) => {
  console.log('Implementar o endpoint para atualizar a tarefa');

  return;
};
