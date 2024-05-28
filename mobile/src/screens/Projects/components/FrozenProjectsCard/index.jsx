import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

export default function FrozenProjectsCard({
  projects = [],
}) {
  return (
    <SummaryProjectsCard title="Projetos congelados" projects={projects} />
  );
}
