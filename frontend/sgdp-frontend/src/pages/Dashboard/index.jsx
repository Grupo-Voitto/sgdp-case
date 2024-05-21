import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
import SectionProjects from '../../components/SectionProjects';
import TopProjects from '../../components/TopProjects';
import { local } from '../../services/api';

const Dashboard = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const project = await local.get("projetos?status=true");
      if (project) {
        console.log("PROJETOS", project.data)
        setProjetos(project.data)
      }
    }

    getProjects();
  }, [])
  return (
    <Container>
      <ContentContruprime />
      <SectionProjects />
      <TopProjects />

    </Container>
  )
}

export default Dashboard;