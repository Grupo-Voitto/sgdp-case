import React, { useEffect, useState } from 'react';
import { Container, Table } from './styles';
import { local } from '../../services/api';
const MemberList = ({ top }) => {
  const [membros, setMembros] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const pessoas = await local.get("membros");
      if (pessoas) {
        setMembros(pessoas.data);
      }
    }
    getProjects();
  }, [])
  return (
    <Container>
      <h3>Lista de membros</h3>
      <Table>
        <thead>
          <tr>
            <th scope="col" >Nome</th>
            <th scope="col">Função</th>
          </tr>
        </thead>
        <tbody>
          {
            membros
              .map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{elem.nome}</td>
                    <td>{elem.funcao}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>

    </Container>
  )
}

export default MemberList;