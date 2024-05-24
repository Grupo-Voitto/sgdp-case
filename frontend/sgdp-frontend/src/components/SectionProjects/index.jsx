import React, { useEffect } from 'react';
import { Container, ProjectContainer, Content, ContentProjects } from './styles';
import ActivityGraph from '../ActivityGraph';
import { getDataAtualSimple } from '../../utils';
import ProjectCard from '../ProjectCard';

const SectionProjects = ({ andamento }) => {

  return (
    <Container>
      {console.log(andamento)}
      <ProjectContainer>
        <Content>
          <h2>Projetos em Andamento</h2>
          <span>{getDataAtualSimple()}</span>

        </Content>
        <ContentProjects>
          {andamento.map((elem, index) => {
            return (
              <ProjectCard title={elem.titulo} id={elem.id_projeto} type={elem.area.description} progress={elem.progresso} key={index} />
            )
          })}
        </ContentProjects>
      </ProjectContainer>
      <ActivityGraph />
    </Container>
  )
}

export default SectionProjects;