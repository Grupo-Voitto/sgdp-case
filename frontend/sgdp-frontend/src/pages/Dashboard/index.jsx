import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
import SectionProjects from '../../components/SectionProjects';
import TopProjects from '../../components/TopProjects';
import { local } from '../../services/api';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const project = await local.get("dashboard-projetos");
      if (project) {
        setDashboard(project.data);
      }
    }
    getProjects();
  }, [])
  if (!dashboard) {
    return <></>
  }
  return (
    <Container>
      <ContentContruprime />
      {dashboard?.em_andamento && <SectionProjects andamento={dashboard.em_andamento} />}
      {dashboard?.top_projetos && <TopProjects top={dashboard.top_projetos} />}

    </Container>
  )
}

export default Dashboard;