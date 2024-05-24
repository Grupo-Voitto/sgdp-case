import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Container, Content } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelect from '../../Layouts/InputSelect';
import { Modal } from 'react-responsive-modal';
import { local } from '../../../services/api';


const AddMember = ({ open, onCloseModal, id_projeto, membros }) => {
  const [id_member, setIdMember] = useState(null);
  const navigate = useNavigate();

  async function handleAdd() {
    console.log("TESTE", { id_member, id_projeto })
    if (id_member && id_projeto) {
      await local.post("/projeto/membros", {
        id_projeto,
        id_membro: id_member,
      });
      navigate(0);
      onCloseModal();
    }
  }

  return (
    <Container>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <Content>

          <h2>Adicionar novo membro</h2>
          <InputSelect setIdMember={setIdMember} membros={membros} />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddMember;