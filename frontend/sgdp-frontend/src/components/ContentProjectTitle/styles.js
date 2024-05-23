import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-content: space-evenly;
  gap:1rem;
  height: 3.5rem;
  @media(max-width: 1200px){
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height: fit-content;
    gap:1rem;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background-secondary);
  gap:2rem;
  border-radius: 6px;
  width: 100%;
  padding: 0 1rem 0 0 ;
  @media(max-width: 1200px){
    height: 3.5rem;
  }
`;

export const Content = styled.div`
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    font-weight: bold;
    color:#FFF;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
    }
`;
export const ContentProgress = styled.div`
  position: relative;
  border: 1px solid red;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;
  p {
    font-size: .8rem;
    color: ${props => props.color};
    padding: 0 1rem .5rem 1rem;
    text-align:center;
    padding:0;
    margin:0;
  }
  input {
    height: 1rem;
    width: 1rem;
  }
  div.outbar {
    width: 100%;
    min-width: 25rem;
    background: #2B2B36;
    height: 1rem;
    border-radius: 3px;
    position: relative;
  }
  @media(max-width: 1200px){
    div.outbar {
    min-width: 15rem;
  }
  }
`;


export const SpanBar= styled.div`
  position: absolute;
  left:0;
  border-radius: 3px;
  background: ${props => `${props.color}`};
  width: ${props => props.progress || 10}%!important;
  height: 1rem;
`;
export const ContainerDateEnd= styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-background-secondary);
  border-radius: 6px;
  height: 100%;
  padding: 0 1rem;
  width: 100%;
  gap: 1rem;
  max-width: fit-content;
  justify-self: flex-end;
  svg {
    min-width: 2rem;
    min-height: 2rem;
  }
  p {
    color: #FFF;
    font-size: .8rem;
    min-width: fit-content;
  }
  strong {
    color: ${props => `${props.color}`};
    font-size: .8rem;
  }
  @media(max-width: 1200px){
    height: 3.5rem;
    justify-content:center;
  }
`;