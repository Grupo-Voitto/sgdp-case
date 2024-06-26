import React, {useEffect, useState} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import Header from './components/Header';
import DeliveryCard from './components/DeliveryCard';
import ScrollView from 'src/components/ScrollView';
import ProjectInfoCard from './components/ProjectInfoCard';
import {ProjectsAPI} from 'src/services/api';
import FullScreenLoader from 'src/components/FullScreenLoader';

export default function ProjectDetail({route}) {
  const projectID = route.params.projectID;

  const [project, setProject] = useState();
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState();
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectID) {
      return;
    }

    const getProject = async () => {
      setLoading(true);

      const response = await ProjectsAPI.getProjectDetail({projectID});

      const projectInfo = {
        id: response.id_projeto,
        name: response.titulo,
        description: response.descricao,
        expiresIn: response.dead_line,
        progressInPercent: +response.progresso,
        status: response.status,
        area: {
          id: response.area.id,
          name: response.area.description,
          color: response.area.color,
        },
      };

      const projectMembers = response.membros.map(member => ({
        id: member.id,
        name: member.nome,
        role: member.funcao,
      }));

      const projectTasks = response.tarefas.map(task => ({
        id: task.id,
        description: task.description,
        done: task.status === 1,
        updatedAt: task.updated_at,
      }));

      setProject(projectInfo);
      setMembers(projectMembers);
      setTasks(projectTasks);
      setStatus(response.status);

      setLoading(false);
    };

    getProject();
  }, [projectID]);

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);

    ProjectsAPI.changeProjectStatus({projectID, status: newStatus});
  };

  const handleChangeTaskStatus = ({
    taskID,
    done,
  }) => {
    setTasks(prev => {
      return prev?.map(task => {
        if (task.id === taskID) {
          return {...task, done};
        }

        return task;
      });
    });

    ProjectsAPI.changeProjectTaskStatus({projectID, taskID: +taskID, done});
  };

  if (loading) {
    return <FullScreenLoader text="Carregando projeto ..." />;
  }

  return (
    <ScreenContainer shouldGoBack>
      <ScrollView rowGap={16}>
        <DeliveryCard
          projectInfo={project}
          projectAreaColor={project?.area.color}
          expiresIn={project?.expiresIn}
        />
        <Header
          progressInPercent={project?.progressInPercent}
          projectAreaColor={project?.area.color}
          status={status}
          onChangeStatus={handleChangeStatus}
        />
        <ProjectInfoCard
          projectInfo={project}
          members={members}
          tasks={tasks}
          onChangeTaskStatus={handleChangeTaskStatus}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
