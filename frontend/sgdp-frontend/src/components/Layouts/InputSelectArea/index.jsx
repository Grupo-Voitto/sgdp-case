import React, { useState } from 'react';
import { Container } from './styles'

const InputSelectArea = (value, handleSet) => {
  const areas = [
    {
      id: 1,
      nome: "TI"
    },
    {
      id: 2,
      nome: "Marketing"
    },
    {
      id: 3,
      nome: "Comercial"
    },
    {
      id: 4,
      nome: "RH"
    }
  ]
  return (
    <Container>
      <select name="areas" id="areas" defaultValue={value} onChange={(e) => handleSet(e.target.value)}>
        {
          areas.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.nome}</option>
            )
          })
        }
      </select>
    </Container>
  )
}

export default InputSelectArea;