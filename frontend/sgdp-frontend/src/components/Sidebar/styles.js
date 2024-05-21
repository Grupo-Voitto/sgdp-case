import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 10rem; /* largura fixa da sidebar */
  background-color: var(--color-background-primary);
  border-right: 1px solid #2C2D33;
  padding: .5rem;
  height: 100%;
  position:fixed;
  top:0;
  @media(max-width:650px){
    display:none;
  }
`;

export const LinkButton = styled.a`
  padding: .8rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items:center;
  justify-content: flex-start;
  gap: .3rem;
  font-size: .8rem;
  text-align:center;
  color: ${props => props.active ? "#000" : "var(--color-text)"};
  ${props => props.active && "background-color: var(--color-primary);"}
  ${props => props.active && "font-weight: bold;"}
  
  &:hover{
    background-color: var(--color-primary);
    color: #000;
  }
`;