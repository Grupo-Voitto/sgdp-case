import React, { useState } from 'react';
import { Container } from './styles';
import { getDataAtual } from '../../utils';
import AddNewProject from '../Modais/AddNewProject';

const ContentContruprime = ({ title = "CONSTRU", title_color = "PRIME" }) => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  return (
    <Container>
      <p>{title}<strong>{title_color}</strong></p>
      <button onClick={() => setOpen(true)}>Criar Projeto</button>
      <AddNewProject open={open} onCloseModal={onCloseModal} />

    </Container>
  )
}

export default ContentContruprime;