import React from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import ScrollView from 'src/components/ScrollView';
import InProgressProjectsCard from './components/InProgressProjectsCard';
import FinishedProjectsCard from './components/FinishedProjectsCard';
import FrozenProjectsCard from './components/FrozenProjectsCard';

export default function Projects() {
  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <InProgressProjectsCard />
        <FinishedProjectsCard />
        <FrozenProjectsCard />
      </ScrollView>
    </ScreenContainer>
  );
}
