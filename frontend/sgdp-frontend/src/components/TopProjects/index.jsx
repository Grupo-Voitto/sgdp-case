import React, { useEffect } from 'react';
import { Container, Table, SpanBar, Progress } from './styles';
const TopProjects = () => {
  const bodyProject = [
    {
      type: "TI",
      title: "Chatbot",
      progresso: 10,
      color: "#FEB95A"
    },
    {
      type: "Marketing",
      title: "Leads",
      progresso: 48,
      color: "#A9DFD8"

    },
    {
      type: "Comercial",
      title: "Vende e Vende",
      progresso: 22,
      color: "#F2C8ED"

    },
    {
      type: "RH",
      title: "chama Pessoa",
      progresso: 33,
      color: "#20AEF3"

    },
    // {
    //   type: "TI",
    //   title: "IA",
    //   progresso: 99,

    // },
    // {
    //   type: "RH",
    //   title: "PDL",
    //   progresso: 10,

    // }
  ]

  useEffect(() => {
    console.log("Here:done")
  }, [])

  return (
    <Container>
      <h3>Top Projetos</h3>
      <Table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Progresso</th>
            <th scope="col">%</th>
          </tr>
        </thead>
        <tbody>
          {
            bodyProject
              .sort((a, b) => b.progresso - a.progresso)
              .map((elem, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{elem.title}</td>
                    <td><div className='outbar'><SpanBar progress={elem.progresso} color={elem.color}></SpanBar></div></td>
                    <td><Progress color={elem.color}>{elem.progresso}%</Progress></td>
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