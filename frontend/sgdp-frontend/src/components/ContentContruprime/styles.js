import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:1rem;
  div.button-side-bar {
    display: flex;
    align-items:center;
    justify-content:space-between;
    border-radius: 5px;
    background-color: var(--color-background-secondary);
    padding: 0 1rem;
    width: 100%;
    svg{
      color: #FFF;
      width: 1.6rem;
      height: 1.6rem;
      display: none;
    }
    p {
      padding: 1rem;
      width: 100%;
      text-align: ${props => props.openSide ? "right" :"left"};
      font-weight: bold;
      color:#FFF;
      font-weight: normal;
      strong {
        font-weight: normal;
        color: var(--color-primary);
      }
    }
  }
  span{
    min-width: fit-content;
    font-size: 1.2rem;
    color: var(--color-primary);
  }
  button {
    padding: 1rem;
    background:  var(--color-primary);
    transition: var(--transition);
    border-radius: 6px;
    min-width: fit-content;
    &:hover{
      transform: scale(1.01);
    }
  }

  @media(max-width: 1200px){
    flex-direction: column;
    div.button-side-bar {
      svg {
        display: flex;
      }
      p {
        text-align: right;

      }

    }
    span{
      display: none;
    }
    button {
      width: 100%;
    }
  }
`;

