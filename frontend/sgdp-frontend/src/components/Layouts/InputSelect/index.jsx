import React, { useEffect, useState } from 'react';
import { Container } from './styles'
import { local } from '../../../services/api';

const InputSelect = ({ setIdMembro, membros }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function getMembros() {
      const mb = await local.get("/membros");
      const payload_mb = mb.data;
      const payload = payload_mb
        .filter(item => membros ? !(membros.map(elem => elem.id)).includes(item.id) : item)
        .map(elem => {
          return {
            id: elem.id,
            nome: elem.nome,
            funcao: elem.funcao

          }
        })
      setMembers(payload);
    };
    getMembros();
  }, [membros])

  if (!members) {
    return <></>;
  }

  return (
    <Container>
      <select name="members" id="members" onChange={(e) => setIdMembro(e.target.value)}>
        {
          members.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.nome}-{item.funcao}</option>
            )
          })
        }
      </select>
    </Container>
  )
}

export default InputSelect;