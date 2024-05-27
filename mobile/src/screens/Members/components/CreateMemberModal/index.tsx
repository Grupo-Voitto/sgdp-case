import React from 'react';
import Box from 'src/components/Box';
import Input from 'src/components/Input';
import Modal from 'src/components/Modal';

interface CreateMemberModalProps {
  visible?: boolean;
  onClose?: () => void;
}

export default function CreateMemberModal({
  visible = false,
  onClose,
}: CreateMemberModalProps) {
  return (
    <Modal
      visible={visible}
      title="Adicionar membro"
      buttonText="Criar membro"
      onClose={onClose}>
      <Box bgColor="transparent" gap={16} padding={0}>
        <Input label="Nome" />
        <Input label="Função" />
      </Box>
    </Modal>
  );
}
