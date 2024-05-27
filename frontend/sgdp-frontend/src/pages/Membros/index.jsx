import React, { useState } from 'react';
import { Container } from './styles';
import ContentContruprime from '../../components/ContentContruprime';
import MemberList from '../../components/MemberList';

const Membros = () => {
  return (
    <Container>
      <ContentContruprime createMember />
      <MemberList />
    </Container>
  )
}

export default Membros;