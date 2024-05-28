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
    gap:.5rem;
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
    gap: .4rem;
    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: fit-content;
      padding:0;
      height:0;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }

  @media(max-width: 1200px){
    span {
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
    p{
      font-size:.8rem;
    }

  }
`;
export const ContentProgress = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 1rem;
  p {
    font-size: .8rem;
    color: ${props => props.color};
    padding: 0 1rem .5rem 1rem;
    text-align:center;
    padding:0;
    margin:0;
  }
  div.outbar {
    width: 100%;
    min-width: 15rem;
    background: #F1F2F7;
    height: 1rem;
    border-radius: 3px;
    position: relative;
  }
  @media(max-width: 1200px){
    gap: .5rem;
    div.outbar {
      height:.5rem;
      min-width: 2rem;
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
  @media(max-width: 1200px){
    height: .5rem;

  }
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
    padding: 0 1rem;
    max-width: 100%;

  }
`;

export const InputCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  div {
    width: 1rem;
    height: 1rem;
    background: transparent;
    border: 2px solid ${props => props.color};
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 0;
    margin:0;
  }
  p {
    color:${props => props.color};
  }
  &:hover{
    cursor: pointer;
  }
`;