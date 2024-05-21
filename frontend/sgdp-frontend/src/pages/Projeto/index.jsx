import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentProjectTitle from '../../components/ContentProjectTitle';
import SectionAllProjects from '../../components/SectionAllProjects';
import { useParams, useSearchParams } from 'react-router-dom';
import { bodyProject } from '../../utils/constants';
import MainProject from '../../components/MainProject';

const Projetos = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // const myParam = searchParams.get('id');
    setProject(bodyProject.filter(elem => elem.id == id)[0]);
    console.log("myParam::", id);

  }, [])
  if (!project) {
    return (
      <p>ok</p>
    );
  }
  return (
    <Container>
      <ContentProjectTitle type={project.type} progress={project.progresso} title={project.title} color={project.color} data={project.data_entrega} />
      <MainProject project={project} />
    </Container>
  )
}

export default Projetos;