import React from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import Header from './components/Header';
import {ProjectInfo} from 'src/types';
import DeliveryCard from './components/DeliveryCard';
import ScrollView from 'src/components/ScrollView';
import ProjectInfoCard from './components/ProjectInfoCard';

const DUMMY_PROJECT: ProjectInfo = {
  id: 'chatbot',
  name: 'ChatBot',
  progressInPercent: 46,
  area: {
    id: 'ti',
    color: '#FEB95A',
    name: 'TI',
  },
  description:
    'O projeto de Chatbot Construprime visa desenvolver um assistente virtual para facilitar a interação com os clientes da empresa. O chatbot será projetado para fornecer informações sobre produtos, preços, prazos de entrega e serviços oferecidos pela Construprime. Utilizando inteligência artificial, o chatbot será capaz de responder perguntas frequentes e auxiliar os usuários a encontrarem as informações de que precisam de forma rápida e eficiente. Este projeto busca melhorar a experiência do cliente e otimizar o atendimento ao consumidor na área de construção civil.',
  expiresIn: '25/05/2025',
  members: [
    {
      id: 'renata',
      name: 'Renata Weber',
    },
    {
      id: 'henrico',
      name: 'Henrico Piubello',
    },
    {
      id: 'diego',
      name: 'Diego Miguel',
    },
    {
      id: 'marcelo',
      name: 'Marcelo Alvarenga',
    },
  ],
  tasks: [
    {
      id: '1',
      description:
        'Desenvolvimento da interface do chatbot com design responsivo para integração nos canais de comunicação da empresa.',
      done: false,
    },
    {
      id: '2',
      description:
        'Implementação da inteligência artificial para reconhecimento e processamento de linguagem natural.',
      done: false,
    },
    {
      id: '3',
      description:
        'Testes de usabilidade e correção de bugs do chatbot em ambiente controlado.',
      done: false,
    },
    {
      id: '4',
      description:
        'Pesquisa de mercado e levantamento das principais dúvidas e necessidades dos clientes da Construprime.',
      done: true,
    },
    {
      id: '5',
      description:
        'Definição dos casos de uso e elaboração do fluxo de conversação do chatbot.',
      done: true,
    },
  ],
};

interface ProjectDetailProps {
  projectInfo?: ProjectInfo;
}

export default function ProjectDetail({
  projectInfo = DUMMY_PROJECT,
}: ProjectDetailProps) {
  return (
    <ScreenContainer>
      <ScrollView rowGap={16}>
        <Header
          progressInPercent={projectInfo.progressInPercent}
          projectAreaColor={projectInfo.area.color}
        />
        <DeliveryCard
          projectAreaColor={projectInfo.area.color}
          expiresIn={projectInfo.expiresIn}
        />
        <ProjectInfoCard projectInfo={projectInfo} />
      </ScrollView>
    </ScreenContainer>
  );
}
