import React, { useEffect } from 'react';
import { Container } from './styles';
import { GrTechnology } from 'react-icons/gr';
import { SiMarketo } from 'react-icons/si';
import { FaMoneyCheckAlt, FaPeopleCarry } from 'react-icons/fa';

const ProjectCard = ({ type = "TI", title, progress, id }) => {

  return (
    <Container type={type} href={`/projetos/${id}`}>

      {
        type === "TI" ? <GrTechnology color="#FEB95A" /> :
          type === "Marketing" ? <SiMarketo color="#A9DFD8" /> :
            type === "Comercial" ? <FaMoneyCheckAlt color="#F2C8ED" /> : <FaPeopleCarry color="#20AEF3" />
      }
      <h3>{type}</h3>
      <p>{title}</p>
      <span>+{progress}% concluído</span>
    </Container>
  )
}

export default ProjectCard;