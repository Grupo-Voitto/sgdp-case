import React, {useState} from 'react';

import Box from 'src/components/Box';
import Input from 'src/components/Input';
import Modal from 'src/components/Modal';
import {MembersAPI} from 'src/services/api';

interface CreateMemberModalProps {
  visible?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function CreateMemberModal({
  visible = false,
  onClose,
  onSubmit = () => {},
}: CreateMemberModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async () => {
    await MembersAPI.createMember({name, role});

    onSubmit();
  };

  return (
    <Modal
      visible={visible}
      title="Adicionar membro"
      buttonText="Criar membro"
      onClose={onClose}
      onSubmit={handleSubmit}>
      <Box bgColor="transparent" gap={16} padding={0}>
        <Input label="Nome" value={name} onChangeText={setName} />
        <Input label="Função" value={role} onChangeText={setRole} />
      </Box>
    </Modal>
  );
}
