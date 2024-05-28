import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';

export default function FinishedProjectsCard({
  projects = [],
}) {
  return (
    <SummaryProjectsCard title="Projetos finalizados" projects={projects} />
  );
}
