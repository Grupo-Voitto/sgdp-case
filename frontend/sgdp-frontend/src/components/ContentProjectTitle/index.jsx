import React from 'react';
import { Container, SpanBar, ContentProgress, InputCheck, Content, NavContainer, ContainerDateEnd } from './styles';
import { getDataAtualSimple } from '../../utils';
import { GrTechnology } from 'react-icons/gr';
import { SiMarketo } from 'react-icons/si';
import { GoAlertFill } from 'react-icons/go';
import { FaMoneyCheckAlt, FaPeopleCarry, FaCheck } from 'react-icons/fa';
import { local } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { SideBarContext } from '../../SidebarContext';


const ContentProjectTitle = ({ project, setProject }) => {
  const navigate = useNavigate();


  async function handleState(state) {
    const payload = await local.put(`/projetos/${project.id_projeto}`, {
      data: {
        status: state
      }
    });
    if (payload.data) {
      console.log("payload", payload.data);
      setProject(payload.data);
      navigate(0);

    }
  }

  return (
    <Container>
      <NavContainer>
        <Content>
          <span>
            {
              project.area.description === "TI" ? <GrTechnology color="#FEB95A" /> :
                project.area.description === "Marketing" ? <SiMarketo color="#A9DFD8" /> :
                  project.area.description === "Comercial" ? <FaMoneyCheckAlt color="#F2C8ED" /> : <FaPeopleCarry color="#20AEF3" />
            }
          </span>
          <p>{project.titulo}</p>
        </Content>
        <ContentProgress color={project.area.color}>
          <div className='outbar'><SpanBar progress={project.progresso} color={project.area.color}></SpanBar></div>
          <p>+{project.progresso}%</p>
          <InputCheck color={project.color} onClick={() => handleState(project.status == 2 ? 1 : 2)}>
            <div className='check'>{project.status == 2 && <FaCheck color={project.area.color} />}</div>
            <p>Concluir</p>
          </InputCheck>
          <InputCheck onClick={() => handleState(project.status == 0 ? 1 : 0)} color="#E8E8E8">
            <div className='check'>{project.status == 0 && <FaCheck color={"#E8E8E8"} />}</div>
            <p>Congelar</p>
          </InputCheck>
        </ContentProgress>
      </NavContainer>
      <ContainerDateEnd color={project.color}>
        <GoAlertFill color="#fff" />
        <p>Data de entrega: </p>
        <strong>{getDataAtualSimple(project.data)}</strong>
      </ContainerDateEnd>
    </Container>
  )
};
export default ContentProjectTitle;