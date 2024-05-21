import React, { useEffect } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
import SectionAllProjects from '../../components/SectionAllProjects';

const Projetos = () => {
  useEffect(() => {
    console.log("HI, HERE");
  }, [])
  return (
    <Container>
      <ContentContruprime />
      <SectionAllProjects />
    </Container>
  )
}

export default Projetos;