import React, { useState } from 'react';
import { Container } from './styles'

const InputSelect = () => {
  const [open, setOpen] = useState(false);
  const [member, setMember] = useState(1);
  const members = [
    {
      id: 1,
      nome: "Renata"
    },
    {
      id: 2,
      nome: "Diego"
    },
    {
      id: 3,
      nome: "Marcelo"
    },
    {
      id: 4,
      nome: "Henrico"
    }
  ]
  return (
    <Container>
      <select name="members" id="members" defaultValue={member} onChange={(e) => setMember(e.target.value)}>
        {
          members.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.nome}</option>
            )
          })
        }
      </select>
    </Container>
  )
}

export default InputSelect;