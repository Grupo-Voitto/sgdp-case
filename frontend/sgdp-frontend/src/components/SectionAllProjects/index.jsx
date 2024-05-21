import React, { useEffect } from 'react';
import { Container, ProjectContainer, Content, ContentProjects } from './styles';
import { getDataAtualSimple } from '../../utils';
import ProjectCard from '../ProjectCard';
const SectionAllProjects = () => {

  const bodyProjectRecent = [
    {
      type: "TI",
      title: "Chatbot",
      progresso: 10,
      id: 1
    },
    {
      type: "Marketing",
      title: "Leads",
      progresso: 48,
      id: 2

    },
    {
      type: "Comercial",
      title: "Vende e Vende",
      progresso: 22,
      id: 3

    },
    {
      type: "RH",
      title: "chama Pessoa",
      progresso: 33,
      id: 4

    },
  ]
  const bodyProjectEnd = [
    {
      type: "TI",
      title: "Frontend",
      progresso: 100,
      id: 5
    },
    {
      type: "TI",
      title: "CRM",
      progresso: 100,
      id: 6

    },
    {
      type: "Comercial",
      title: "B2C",
      progresso: 100,
      id: 7

    },
    {
      type: "Comercial",
      title: "War Room",
      progresso: 100,
      id: 8

    },
  ]
  const bodyProjectFreeze = [
    {
      type: "TI",
      title: "Carrinho",
      progresso: 22,
      id: 9
    },
    {
      type: "Comercial",
      title: "Bot Conversa",
      progresso: 45,
      id: 10

    },
    {
      type: "RH",
      title: "Retenção",
      progresso: 2,
      id: 11

    },
    {
      type: "RH",
      title: "Plano de Carreiras",
      progresso: 88,
      id: 12

    },
  ]

  useEffect(() => {
    console.log("Here:done")
  }, [])

  return (
    <Container>
      <ProjectContainer>
        <Content>
          <h2>Projetos em Andamento</h2>
          <span>{getDataAtualSimple()}</span>
        </Content>
        <ContentProjects>
          {bodyProjectRecent.map((elem, index) => {
            return (
              <ProjectCard title={elem.title} id={elem.id} type={elem.type} progress={elem.progresso} key={index} />
            )
          })}
        </ContentProjects>
      </ProjectContainer>
      <ProjectContainer>
        <Content>
          <h2>Projetos Finalizados</h2>
          <span>{bodyProjectEnd.length} projetos</span>
        </Content>
        <ContentProjects>
          {bodyProjectEnd.map((elem, index) => {
            return (
              <ProjectCard title={elem.title} id={elem.id} type={elem.type} progress={elem.progresso} key={index} />
            )
          })}
        </ContentProjects>
      </ProjectContainer>
      <ProjectContainer>
        <Content>
          <h2>Projetos Congelados</h2>
          <span>{bodyProjectFreeze.length} projetos</span>
        </Content>
        <ContentProjects>
          {bodyProjectFreeze.map((elem, index) => {
            return (
              <ProjectCard title={elem.title} id={elem.id} type={elem.type} progress={elem.progresso} key={index} />
            )
          })}
        </ContentProjects>
      </ProjectContainer>
    </Container>
  )
}

export default SectionAllProjects;