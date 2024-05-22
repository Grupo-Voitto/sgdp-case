const calculaProgresso = (total, concluidas) => {
  if(total <= 0 ){
    return 0;
  }
  const total_progresso = (concluidas/total)*100;
  return total_progresso;
}

export {
  calculaProgresso
}; 