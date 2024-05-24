import React, { useState } from 'react';
import { Container } from './styles';
import { getDataAtual } from '../../utils';
import AddNewProject from '../Modais/AddNewProject';

const ContentContruprime = ({ title = "CONSTRU", title_color = "PRIME", createProject = false, createMember = false }) => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  return (
    <Container>
      <p>{title}<strong>{title_color}</strong></p>
      {
        createProject && (
          <>
            <button onClick={() => setOpen(true)}>Criar Projeto</button>
            <AddNewProject open={open} onCloseModal={onCloseModal} />
          </>

        )
      }
      {
        createMember && (
          <>
            <button onClick={() => setOpen(true)}>Criar Membro</button>
            {/* <AddNewMember open={open} onCloseModal={onCloseModal} /> */}
          </>

        )
      }

    </Container>
  )
}

export default ContentContruprime;