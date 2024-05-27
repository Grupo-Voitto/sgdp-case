import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Container, Content } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelect from '../../Layouts/InputSelect';
import { Modal } from 'react-responsive-modal';
import { local } from '../../../services/api';


const AddMemberGeral = ({ open, onCloseModal }) => {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const navigate = useNavigate();

  async function handleAdd() {

    try {
      await local.post("/membros", {
        nome,
        funcao,
      });
      navigate(0);
      onCloseModal();
    } catch (error) {
      alert("Um erro aconteceu");
      console.error(error)
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
          <input type="text" value={nome} placeholder="Nome do membro" onChange={(e) => setNome(e.target.value)} />
          <input type="text" value={funcao} placeholder="Função/cargo" onChange={(e) => setFuncao(e.target.value)} />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddMemberGeral;