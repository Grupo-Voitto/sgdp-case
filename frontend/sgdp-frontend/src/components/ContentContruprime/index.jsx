import React from 'react';
import { Container } from './styles';
import { getDataAtual } from '../../utils';

const ContentContruprime = ({ title = "CONSTRU", title_color = "PRIME" }) => {
  return (
    <Container>
      <p>{title}<strong>{title_color}</strong></p>
      <span>{getDataAtual()}</span>

    </Container>
  )
}

export default ContentContruprime;