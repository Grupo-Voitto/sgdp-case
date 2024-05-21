import React from 'react';
import SummaryProjectsCard from 'src/components/SummaryProjectsCard';
import {Project} from 'src/types';

const DUMMY_PROJECTS: Project[] = [
  {
    id: 'chatbot',
    name: 'Chatbot',
    area: {
      id: 'ti',
      name: 'TI',
      color: '#FEB95A',
    },
    progressInPercent: 46,
  },
  {
    id: 'sales-flow',
    name: 'Fluxo Vendas',
    area: {
      id: 'marketing',
      name: 'Marketing',
      color: '#A9DFD8',
    },
    progressInPercent: 17,
  },
];

export default function FinishedProjectsCard() {
  return (
    <SummaryProjectsCard
      title="Projetos finalizados"
      projects={DUMMY_PROJECTS}
    />
  );
}
