import React, { useState } from 'react';
import { Container, Content } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelect from '../../Layouts/InputSelect';
import { Modal } from 'react-responsive-modal';

const AddMember = ({ open, onCloseModal }) => {

  function handleAdd() {
    console.log("Add");
    alert("Adicionado com sucesso");
    onCloseModal();
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
          <InputSelect />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddMember;