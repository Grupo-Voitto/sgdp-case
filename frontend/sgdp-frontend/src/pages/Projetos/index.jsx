import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
import SectionAllProjects from '../../components/SectionAllProjects';
const Projetos = () => {

  return (
    <Container>
      <ContentContruprime />
      <SectionAllProjects />
    </Container>
  )
}

export default Projetos;