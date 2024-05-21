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
          <p>+{progress}% concluído</p>
          <div className='outbar'><SpanBar progress={progress} color={color}></SpanBar></div>
        </ContentProgress>
      </NavContainer>
      <ContainerDateEnd color={color}>
        <GoAlertFill color="#ffcc00" />
        <p>Data de entrega: </p>
        <strong>{getDataAtualSimple(data)}</strong>
      </ContainerDateEnd>

    </Container>
  )
}

export default ContentProjectTitle;