import React, { useState } from 'react';
import { Container, Content, Input } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelectArea from '../../Layouts/InputSelectArea';
import { Modal } from 'react-responsive-modal';
import { local } from '../../../services/api';

const AddNewProject = ({ open, onCloseModal }) => {
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    dead_line: null,
    area: 1
  })

  async function handleAdd() {
    if (!payload.title) alert("Preencha o campo de titulo");
    if (!payload.description) alert("Preencha o campo de Descriçao");
    if (!payload.dead_line) alert("Preencha o campo de Dead Line");

    try {
      await local.post("/projetos", payload);
      alert("Adicionado com sucesso");

    } catch (error) {
      alert("Algo deu errado");
    }

    onCloseModal();
  }

  function handleSet(value) {
    setPayload(prev => ({ ...prev, area: value }));
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
          <h2>Adicionar novo Projeto</h2>
          <Input placeholder='Titulo do Projeto' value={payload.title} onChange={(e) => setPayload(prev => ({ ...prev, title: e.target.value }))} />
          <Input placeholder='Descreva sobre o projeto' value={payload.description} onChange={(e) => setPayload(prev => ({ ...prev, description: e.target.value }))} />
          <Input type="date" placeholder='Dead Line do Projeto' value={payload.dead_line} onChange={(e) => setPayload(prev => ({ ...prev, dead_line: e.target.value }))} />
          <InputSelectArea value={payload.area} handleSet={handleSet} />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddNewProject;