import React, { useEffect } from 'react';
import { Container, ProjectContainer, Content, ContentProjects } from './styles';
import ActivityGraph from '../ActivityGraph';
import { getDataAtualSimple } from '../../utils';
import ProjectCard from '../ProjectCard';
const SectionProjects = () => {

  const bodyProject = [
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
    // {
    //   type: "TI",
    //   title: "IA",
    //   progresso: 99,

    // },
    // {
    //   type: "RH",
    //   title: "PDL",
    //   progresso: 10,

    // }
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
          {bodyProject.map((elem, index) => {
            return (
              <ProjectCard title={elem.title} type={elem.type} progress={elem.progresso} key={index} />
            )
          })}
        </ContentProjects>
      </ProjectContainer>
      <ActivityGraph />
    </Container>
  )
}

export default SectionProjects;