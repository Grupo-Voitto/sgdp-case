import React from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import InProgressProjectsCard from './components/InProgressProjectsCard';
import ScrollView from 'src/components/ScrollView';
import ProjectsActivityChart from './components/ProjectsActivityChart';
import TopProjects from './components/TopProjects';

export default function Home() {
  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <InProgressProjectsCard />
        <ProjectsActivityChart />
        <TopProjects />
      </ScrollView>
    </ScreenContainer>
  );
}
