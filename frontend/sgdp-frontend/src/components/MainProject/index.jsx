import React, { useState } from 'react';
import { Container, ContentDescription, ContentTeam, MemberComponent, ButtonCreate, ContentTasks, ContentHeader, Task } from './styles';
import { MdClose } from 'react-icons/md';
import { FaRegTrashAlt, FaCheck } from 'react-icons/fa';
import AddMember from '../Modais/AddMember';
import AddTask from '../Modais/AddTask';
import { local } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const MainProject = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const onCloseModal = () => setOpen(false);
  const onCloseModalTask = () => setOpenTask(false);
  const navigate = useNavigate();

  async function removeTask(id_tarefa) {

    try {
      await local.delete(`/projeto/tarefas/${id_tarefa}`)
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };
  async function changeStatus(id_tarefa) {
    if (!id_tarefa) {
      return;
    }
    try {
      await local.put(`/projeto/tarefas/${id_tarefa}`)
      navigate(0)
    } catch (error) {
      console.error(error);
    }
  };
  async function removeUser(id_membro) {
    console.log("id_membro", id_membro);
    console.log("id_projeto", project.id_projeto);
    try {
      await local.delete(`/projeto/membros/${id_membro}?id_projeto=${project.id_projeto}`)
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <ContentDescription>
          <h3>Descrição:</h3>
          <p>{project.descricao}</p>
        </ContentDescription>
        <ContentTeam color={project.area.color}>
          <h3>Time: </h3>
          <div className='member-session'>
            {
              project.membros.length > 0 ?
                project.membros.map(elem => {
                  return (
                    <MemberComponent color={project.area.color} onClick={() => removeUser(elem.id)}>
                      <span>{elem.nome}</span>
                      <MdClose />
                    </MemberComponent>
                  )
                })
                : <></>
            }
            <span className='add-member' onClick={() => setOpen(true)}>Adicionar membro</span>
          </div>
        </ContentTeam>
        <ContentTasks>
          <ContentHeader>
            <h3>Tarefas criadas: <strong>{project.tarefas.length}</strong></h3>
            <div>
              <p>Concluidas: <strong>{(project.tarefas.filter(elem => elem.status === 1)).length} de {project.tarefas.length}</strong></p>
            </div>
          </ContentHeader>
          {
            project.tarefas
              .sort((a, b) => a.status - b.status)
              .map(elem => {
                return (
                  <Task key={elem.id} color={project.area.color} status={elem.status}>
                    {elem.status ? <div className='check' onClick={() => changeStatus(elem.id)} ><FaCheck /></div> : <div onClick={() => changeStatus(elem.id)} />}
                    <p>{elem.description}</p>
                    <FaRegTrashAlt color="var(--color-text)" onClick={() => removeTask(elem.id)} />
                  </Task>
                )
              })
          }
        </ContentTasks>
        <ButtonCreate color={project.area.color} onClick={() => setOpenTask(true)}>Criar nova tarefa</ButtonCreate>

      </Container>
      <AddMember open={open} onCloseModal={onCloseModal} id_projeto={project.id_projeto} membros={project.membros} />
      <AddTask open={openTask} onCloseModal={onCloseModalTask} membros={project.membros} id_projeto={project.id_projeto} />
    </>
  )
}

export default MainProject;