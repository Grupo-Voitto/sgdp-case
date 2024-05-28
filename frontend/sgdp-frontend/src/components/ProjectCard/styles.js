import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  background: var(--color-background-primary);
  flex-direction: column;
  border-radius: 6px;
  padding: 1rem;
  height: 100%;
  width: 180px!important;
  
  h3 {
    color: #fff;
    width: fit-content;
    width: 160px!important;
  }
  p {
    color:#E8E8E8;
    height: 2rem;
    min-width: fit-content;
    width: 160px!important;
    word-wrap: break-word;
  }

  span {
    color: ${props=> props.type ==="TI" ? "#FEB95A": props.type === "Marketing" ? "#A9DFD8":props.type === "Comercial" ? "#F2C8ED":"#20AEF3" };
    font-size: .7rem;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  transition: var(--transtion);
  &:hover{
    transform: scale(.95);
    cursor: pointer;
  }
  @media(max-width: 1200px){
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    background: none;
    align-items:center;
    padding: .5rem;
    svg {
      width: 50px;
    }
    h3 {
      width: fit-content;
      font-size: .8rem;
    }
    p{
      width: fit-content;
      font-size: .6rem;
      width: 100%;
      padding: 0;
      margin:0;
      height: fit-content;
    }
    span{
      width: fit-content;
      font-size: .6rem;
      width: 100%;
      text-align: right;
      
    }
  }
`;
