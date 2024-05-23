import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentProjectTitle from '../../components/ContentProjectTitle';
import SectionAllProjects from '../../components/SectionAllProjects';
import { useParams, useSearchParams } from 'react-router-dom';
import { bodyProject } from '../../utils/constants';
import MainProject from '../../components/MainProject';
import { local } from '../../services/api';

const Projetos = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // const myParam = searchParams.get('id');
    async function getProject() {
      if (id) {
        const payload = await local.get(`/projetos/${id}`);
        setProject(payload.data);
      }
    }

    getProject();
  }, [id]);


  if (!project) {
    return (
      <></>
    );
  }
  return (
    <Container>
      <ContentProjectTitle type={project.area.description} progress={project.progresso} title={project.titulo} color={project.area.color} data={project.dead_line} />
      <MainProject project={project} />
    </Container>
  )
}

export default Projetos;