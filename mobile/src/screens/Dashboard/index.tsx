import React, {useEffect, useState} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import InProgressProjectsCard from './components/InProgressProjectsCard';
import ScrollView from 'src/components/ScrollView';
import ProjectsActivityChart from './components/ProjectsActivityChart';
import TopProjects from './components/TopProjects';
import {DashboardAPI} from 'src/services/api';
import {Project} from 'src/types';

export default function Dahsboard() {
  const [dashboardData, setDashboardData] = useState<
    DashboardAPI.GetDashbordDataResponse | undefined
  >();

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const response = await DashboardAPI.getDashboardData();

        setDashboardData(response);
      } catch (err) {
        console.log(err);
      }
    };

    getDashboardData();
  }, []);

  const inProgressProjects: Project[] =
    dashboardData?.em_andamento?.map(project => {
      return {
        id: project.id_projeto,
        name: project.titulo,
        area: {
          id: project.area.id,
          name: project.area.description,
          color: project.area.color,
        },
        progressInPercent: +project.progresso,
      };
    }) || [];

  const topProjects: Project[] =
    dashboardData?.top_projetos?.map(project => {
      return {
        id: project.id_projeto,
        name: project.titulo,
        area: {
          id: project.area.id,
          name: project.area.description,
          color: project.area.color,
        },
        progressInPercent: +project.progresso,
      };
    }) || [];

  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <InProgressProjectsCard projects={inProgressProjects} />
        <ProjectsActivityChart />
        <TopProjects projects={topProjects} />
      </ScrollView>
    </ScreenContainer>
  );
}
