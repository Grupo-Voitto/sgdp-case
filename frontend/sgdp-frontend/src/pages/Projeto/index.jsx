import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
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
        console.log("payload", payload.data);
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
      <ContentContruprime />
      <ContentProjectTitle project={project} setProject={setProject} />
      <MainProject project={project} setProject={setProject} />
    </Container>
  )
}

export default Projetos;