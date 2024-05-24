import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

interface FrozenProjectsCardProps {
  projects: Project[];
}

export default function FrozenProjectsCard({
  projects = [],
}: FrozenProjectsCardProps) {
  return (
    <SummaryProjectsCard title="Projetos congelados" projects={projects} />
  );
}
