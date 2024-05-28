import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

export default function InProgressProjectsCard({
  projects,
}) {
  return (
    <SummaryProjectsCard title="Projetos em andamento" projects={projects} />
  );
}
