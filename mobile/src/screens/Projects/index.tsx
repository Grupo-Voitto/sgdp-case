import React, {useEffect, useState} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import ScrollView from 'src/components/ScrollView';
import InProgressProjectsCard from './components/InProgressProjectsCard';
import FinishedProjectsCard from './components/FinishedProjectsCard';
import FrozenProjectsCard from './components/FrozenProjectsCard';
import {GetProjectsResponse} from 'src/services/api/ProjectsAPI';
import {Project} from 'src/types';
import {ProjectsAPI} from 'src/services/api';

const normalizeProjectsResponse = (
  response: GetProjectsResponse,
): {
  frozenProjects: Project[];
  inProgressProjects: Project[];
  finishedProjects: Project[];
} => {
  return response.reduce(
    (prev, project) => {
      const normalizedProject: Project = {
        id: project.id_projeto,
        name: project.titulo,
        area: {
          id: project.area.id,
          name: project.area.description,
          color: project.area.color,
        },
        progressInPercent:
          +project.total_tarefas > 0
            ? (+project.tarefas_concluidas / +project.total_tarefas) * 100
            : 0,
      };

      let projectType:
        | 'frozenProjects'
        | 'inProgressProjects'
        | 'finishedProjects' = 'inProgressProjects';

      if (project.status === 0) {
        projectType = 'frozenProjects';
      }

      if (project.status === 1) {
        projectType = 'inProgressProjects';
      }

      if (project.status === 2) {
        projectType = 'finishedProjects';
      }

      return {
        ...prev,
        [projectType]: [...prev[projectType], normalizedProject],
      };
    },
    {
      frozenProjects: [],
      inProgressProjects: [],
      finishedProjects: [],
    },
  );
};

export default function Projects() {
  const [projects, setProjects] = useState<{
    frozenProjects: Project[];
    inProgressProjects: Project[];
    finishedProjects: Project[];
  }>({
    frozenProjects: [],
    inProgressProjects: [],
    finishedProjects: [],
  });

  useEffect(() => {
    const getProjects = async () => {
      const response = await ProjectsAPI.getProjects();

      setProjects(normalizeProjectsResponse(response));
    };

    getProjects();
  }, []);

  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <InProgressProjectsCard projects={projects.inProgressProjects} />
        <FinishedProjectsCard projects={projects.finishedProjects} />
        <FrozenProjectsCard projects={projects.frozenProjects} />
      </ScrollView>
    </ScreenContainer>
  );
}
