import React from 'react';
import { Container, Content, Graph, Legend, BarTop } from './styles';
import { FaCircle, FaRegCircle } from 'react-icons/fa'


const ActivityGraph = () => {

  const data_fake = [
    {
      total: 10,
      concluido: 5
    },
    {
      total: 8,
      concluido: 3
    },
    {
      total: 3,
      concluido: 1
    },
    {
      total: 13,
      concluido: 8
    },
    {
      total: 10,
      concluido: 10
    },
  ]

  return (
    <Container>
      <h3>Atividades</h3>
      <Content>
        <Graph>
          {data_fake.map(elem => {
            return (
              <BarTop total={elem.total} concluido={elem.concluido}>
                <span></span>
              </BarTop>
            );
          })}

        </Graph>
        <Legend>
          <p className='active'><FaCircle size=".6rem" color="var(--color-primary)" /> Concluídas</p>
          <p><FaRegCircle size=".6rem" /> Total</p>
        </Legend>
      </Content>
    </Container>
  )
}

export default ActivityGraph;