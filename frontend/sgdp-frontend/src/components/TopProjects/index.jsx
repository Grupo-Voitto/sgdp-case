import React, { useEffect } from 'react';
import { Container, Table, SpanBar, Progress } from './styles';
const TopProjects = ({ top }) => {

  useEffect(() => {
    console.log("Here:done")
  }, [])

  return (
    <Container>
      <h3>Top Projetos</h3>
      <Table>
        <thead>
          <tr>
            <th scope="col" className='p-remove'>#</th>
            <th scope="col" className='p-remove'>Nome</th>
            <th scope="col" className='p-remove'>Progresso</th>
            <th scope="col" className='p-remove'>%</th>
          </tr>
        </thead>
        <tbody>
          {
            top
              .sort((a, b) => b.progresso - a.progresso)
              .map((elem, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{elem.titulo}</td>
                    <td><div className='outbar'><SpanBar progress={elem.progresso} color={elem.area.color}></SpanBar></div></td>
                    <td><Progress color={elem.area.color}>{elem.progresso}%</Progress></td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>

    </Container>
  )
}

export default TopProjects;