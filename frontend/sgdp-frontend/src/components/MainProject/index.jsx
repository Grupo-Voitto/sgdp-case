import React, { useState } from 'react';
import { Container, ContentDescription, ContentTeam, MemberComponent, ButtonCreate, ContentTasks, ContentHeader, Task } from './styles';
import { MdClose } from 'react-icons/md';
import { FaRegTrashAlt, FaCheck } from 'react-icons/fa';
import AddMember from '../Modais/AddMember';
import AddTask from '../Modais/AddTask';


const MainProject = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const onCloseModal = () => setOpen(false);
  const onCloseModalTask = () => setOpenTask(false);

  return (
    <>
      <Container>
        <ContentDescription>
          <h3>Descrição:</h3>
          <p>{project.descricao}</p>
        </ContentDescription>
        <ContentTeam>
          <h3>Time: </h3>
          <div className='member-session'>
            {
              project.membros.map(elem => {
                return (
                  <MemberComponent color={project.color}>
                    <span>{elem.nome}</span>
                    <MdClose />
                  </MemberComponent>
                )
              })
            }
            <span className='add-member' onClick={() => setOpen(true)}>Adicionar participante</span>
          </div>
        </ContentTeam>
        <ContentTasks>
          <ContentHeader>
            <h3>Tarefas criadas: <strong>{project.tarefas.length}</strong></h3>
            <div>
              {console.log("PROJECTS", project.tarefas.filter(elem => elem.status === 1).length)}
              <p>Concluidas: <strong>{(project.tarefas.filter(elem => elem.status === 1)).length} de {project.tarefas.length}</strong></p>
            </div>
          </ContentHeader>
          {
            project.tarefas
              .sort((a, b) => a.status - b.status)
              .map(elem => {
                return (
                  <Task key={elem.id} color={project.color} status={elem.status} onClick={() => alert(`Alterado: id=${elem.id}`)}>
                    {elem.status ? <div className='check'><FaCheck /></div> : <div />}
                    <p>{elem.descricao}</p>
                    <FaRegTrashAlt color="var(--color-text)" />
                  </Task>
                )
              })
          }
        </ContentTasks>
        <ButtonCreate color={project.color} onClick={() => setOpenTask(true)}>Criar nova tarefa</ButtonCreate>

      </Container>
      <AddMember open={open} onCloseModal={onCloseModal} />
      <AddTask open={openTask} onCloseModal={onCloseModalTask} />
    </>
  )
}

export default MainProject;