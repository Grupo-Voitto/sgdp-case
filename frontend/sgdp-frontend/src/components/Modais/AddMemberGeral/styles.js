import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Content = styled.div`
  width: 30vw;
  height: 100%;
  padding: 1rem 0;
  h2 {
    color: var(--color-background-primary);
  }
  input {
    margin-top: 1.5rem;
    color: var(--color-text);
    width: 100%;
    border-bottom: 1px solid #9D9FA1;
    padding: 0 0 1rem 0;
    margin-bottom:1rem;
  }
  button {
    width: 100%;
    background: var(--color-background-primary);
    color: #FFF;
    padding: 1rem;
    text-align:center;
    border-radius: 6px;
  }
 @media(max-width: 1200px){
  width: 80vw;
 }
`;