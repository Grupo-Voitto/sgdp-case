import React from 'react';
import { Container, SpanBar, ContentProgress, Content, NavContainer, ContainerDateEnd } from './styles';
import { getDataAtualSimple } from '../../utils';
import { GrTechnology } from 'react-icons/gr';
import { SiMarketo } from 'react-icons/si';
import { GoAlertFill } from 'react-icons/go';
import { FaMoneyCheckAlt, FaPeopleCarry } from 'react-icons/fa';

const ContentProjectTitle = ({ title, progress, type, data, color }) => {
  return (
    <Container>
      <NavContainer>
        <Content>
          <span>
            {
              type === "TI" ? <GrTechnology color="#FEB95A" /> :
                type === "Marketing" ? <SiMarketo color="#A9DFD8" /> :
                  type === "Comercial" ? <FaMoneyCheckAlt color="#F2C8ED" /> : <FaPeopleCarry color="#20AEF3" />
            }
            <p>{title}</p>
          </span>
        </Content>
        <ContentProgress color={color}>
          <div className='outbar'><SpanBar progress={progress} color={color}></SpanBar></div>
          <p>+{progress}%</p>
          <input type="checkbox" id="concluido" name="concluido" />
          <label for="concluido">Concluido</label>
          <input type="checkbox" id="congelado" name="congelado" />
          <label for="congelado">Congelado</label>
        </ContentProgress>
      </NavContainer>
      <ContainerDateEnd color={color}>
        <GoAlertFill color="#fff" />
        <p>Data de entrega: </p>
        <strong>{getDataAtualSimple(data)}</strong>
      </ContainerDateEnd>

    </Container>
  )
}

export default ContentProjectTitle;