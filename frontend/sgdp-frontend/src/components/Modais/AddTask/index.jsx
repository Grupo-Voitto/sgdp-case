import React, { useState } from 'react';
import { Container, Content, InputText } from './styles'
import 'react-responsive-modal/styles.css';
import InputSelect from '../../Layouts/InputSelect';
import { Modal } from 'react-responsive-modal';
import { local } from '../../../services/api';
import { useNavigate } from "react-router-dom";

const AddTask = ({ open, onCloseModal, membros, id_projeto }) => {
  const [descricao, setDescricao] = useState("");
  const [idMembro, setIdMembro] = useState("");
  const navigate = useNavigate();

  async function handleAdd() {

    try {
      const payload = {
        description: descricao,
        id_membro: idMembro,
        id_projeto
      }
      if (!descricao || !idMembro) {
        alert("Um erro aconteceu");
        return;
      }
      await local.post("/projeto/tarefas", payload);
      setIdMembro("");
      setDescricao("");
      navigate(0);
      onCloseModal();

    } catch (error) {
      alert("Um erro aconteceu");
      console.error(error)
    }

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
          <InputText placeholder='Descreva a atividade a ser executada' type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          <InputSelect setIdMembro={setIdMembro} membros={membros} />
          <button onClick={() => handleAdd()}>Adicionar</button>
        </Content>
      </Modal>
    </Container>
  )
}

export default AddTask;