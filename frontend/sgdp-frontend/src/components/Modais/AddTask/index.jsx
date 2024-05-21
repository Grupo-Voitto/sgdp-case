import React, { useState } from 'react';
import { Container, Content, InputText } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelect from '../../Layouts/InputSelect';
import { Modal } from 'react-responsive-modal';

const AddTask = ({ open, onCloseModal }) => {

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

          <h2>Adicionar nova Tarefa</h2>
          <InputText placeholder='Descreva a atividade a ser executada' />
          <InputSelect />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddTask;