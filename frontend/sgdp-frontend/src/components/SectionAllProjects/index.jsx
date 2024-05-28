import React, { useEffect, useState } from 'react';
import { Container, ProjectContainer, Content, ContentProjects } from './styles';
import { getDataAtualSimple } from '../../utils';
import ProjectCard from '../ProjectCard';
import { local } from '../../services/api';
const SectionAllProjects = () => {
  const [projetos, setProjetos] = useState({});

  useEffect(() => {
    async function getProjects() {
      const project = await local.get("projetos");
      if (project) {
        setProjetos(project.data);
      }
    }

    getProjects();
  }, [])
  if (projetos) {
    return (
      <Container>
        <ProjectContainer>
          <Content>
            <h2>Projetos em Andamento</h2>
            <span>{getDataAtualSimple()}</span>
          </Content>
          <ContentProjects>
            {projetos?.em_andamento?.map((elem, index) => {
              return (
                <ProjectCard title={elem.titulo} id={elem.id_projeto} type={elem.area.description} progress={elem.progresso} key={index} />
              )
            })}
          </ContentProjects>
        </ProjectContainer>
        <ProjectContainer>
          <Content>
            <h2>Projetos Finalizados</h2>
            <span>{projetos?.concluidos?.length} projetos</span>
          </Content>
          <ContentProjects>
            {projetos?.concluidos?.map((elem, index) => {
              return (
                <ProjectCard title={elem.titulo} id={elem.id_projeto} type={elem.area.description} progress={elem.progresso} key={index} />
              )
            })}
          </ContentProjects>
        </ProjectContainer>
        <ProjectContainer>
          <Content>
            <h2>Projetos Congelados</h2>
            <span>{projetos?.congelado?.length} projetos</span>
          </Content>
          <ContentProjects>
            {projetos.congelado ?
              projetos?.congelado?.map((elem, index) => {
                return (
                  <ProjectCard title={elem.titulo} id={elem.id_projeto} type={elem.area.description} progress={elem.progresso} key={index} />
                )
              }) : <></>}
          </ContentProjects>
        </ProjectContainer>
      </Container>
    )
  }
  return <></>
}

export default SectionAllProjects;