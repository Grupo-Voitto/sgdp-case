import React, { useState } from 'react';
import { Container } from './styles';
import { getDataAtual } from '../../utils';
import AddNewProject from '../Modais/AddNewProject';
import AddMemberGeral from '../Modais/AddMemberGeral';

const ContentContruprime = ({ title = "CONSTRU", title_color = "PRIME", createProject = false, createMember = false }) => {
  const [open, setOpen] = useState(false);
  const [openMemberGeral, setOpenMemberGeral] = useState(false);

  const onCloseModal = () => setOpen(false);
  const onCloseModalMemberGeral = () => setOpenMemberGeral(false);

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
            <button onClick={() => setOpenMemberGeral(true)}>Criar Membro</button>
            <AddMemberGeral open={openMemberGeral} onCloseModal={onCloseModalMemberGeral} />
          </>

        )
      }

    </Container>
  )
}

export default ContentContruprime;