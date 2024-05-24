import React, {useEffect, useState} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import ScrollView from 'src/components/ScrollView';
import InProgressProjectsCard from './components/InProgressProjectsCard';
import FinishedProjectsCard from './components/FinishedProjectsCard';
import FrozenProjectsCard from './components/FrozenProjectsCard';
import {Project} from 'src/types';
import {ProjectsAPI} from 'src/services/api';

export default function Projects() {
  const [projects, setProjects] = useState<
    ProjectsAPI.GetProjectsResponse | undefined
  >();

  useEffect(() => {
    const getProjects = async () => {
      const response = await ProjectsAPI.getProjects();

      setProjects(response);
    };

    getProjects();
  }, []);

  const inProgressProjects: Project[] =
    projects?.em_andamento?.map(project => ({
      id: project.id_projeto,
      name: project.titulo,
      progressInPercent: +project.progresso,
      area: {
        id: project.area.id,
        name: project.area.description,
        color: project.area.color,
      },
    })) || [];

  const finishedProjects: Project[] =
    projects?.concluidos?.map(project => ({
      id: project.id_projeto,
      name: project.titulo,
      progressInPercent: +project.progresso,
      area: {
        id: project.area.id,
        name: project.area.description,
        color: project.area.color,
      },
    })) || [];

  const frozenProjects: Project[] =
    projects?.congelado?.map(project => ({
      id: project.id_projeto,
      name: project.titulo,
      progressInPercent: +project.progresso,
      area: {
        id: project.area.id,
        name: project.area.description,
        color: project.area.color,
      },
    })) || [];

  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <InProgressProjectsCard projects={inProgressProjects} />
        <FinishedProjectsCard projects={finishedProjects} />
        <FrozenProjectsCard projects={frozenProjects} />
      </ScrollView>
    </ScreenContainer>
  );
}
