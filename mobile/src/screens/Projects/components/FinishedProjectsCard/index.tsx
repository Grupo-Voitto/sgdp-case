import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

interface FinishedProjectsCardProps {
  projects: Project[];
}

export default function FinishedProjectsCard({
  projects = [],
}: FinishedProjectsCardProps) {
  return (
    <SummaryProjectsCard title="Projetos finalizados" projects={projects} />
  );
}
