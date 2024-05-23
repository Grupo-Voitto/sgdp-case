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
            <th scope="col" >#</th>
            <th scope="col" >Nome</th>
            <th scope="col" className='p-remove'>Progresso</th>
            <th scope="col">%</th>
          </tr>
        </thead>
        <tbody>
          {
            top
              .sort((a, b) => b.progresso - a.progresso)
              .map((elem, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{elem.titulo}</td>
                    <td className='outbar'><div className='outbar'><SpanBar progress={elem.progresso} color={elem.area.color}></SpanBar></div></td>
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