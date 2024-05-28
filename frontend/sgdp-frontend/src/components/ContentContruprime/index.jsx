import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { getDataAtual } from '../../utils';
import AddNewProject from '../Modais/AddNewProject';
import AddMemberGeral from '../Modais/AddMemberGeral';
import { IoMdMenu } from 'react-icons/io';
import { SideBarContext } from '../../SidebarContext';

const ContentContruprime = ({ title = "CONSTRU", title_color = "PRIME", createProject = false, createMember = false, initial_open = false }) => {
  const [open, setOpen] = useState(false);
  const [openMemberGeral, setOpenMemberGeral] = useState(false);
  const onCloseModal = () => setOpen(false);
  const onCloseModalMemberGeral = () => setOpenMemberGeral(false);

  const { openSide, toggleSideBar } = useContext(SideBarContext);


  return (
    <Container openSide={openSide}>
      <div className='button-side-bar'>
        <IoMdMenu onClick={() => toggleSideBar()} />
        <p>{title}<strong>{title_color}</strong></p>
      </div>
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