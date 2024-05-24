import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

interface InProgressProjectsCardProps {
  projects: Project[];
}

export default function InProgressProjectsCard({
  projects = [],
}: InProgressProjectsCardProps) {
  return (
    <SummaryProjectsCard title="Projetos em andamento" projects={projects} />
  );
}
