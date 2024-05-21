import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:2rem;
  p {
    border-radius: 5px;
    background-color: var(--color-background-secondary);
    padding: 1rem;
    width: 100%;
    font-weight: bold;
    color:#FFF;
    font-weight: normal;
    strong {
      font-weight: normal;
      color: var(--color-primary);
    }
  }
  span{
    min-width: fit-content;
    font-size: 1.2rem;
    color: var(--color-primary);
  }
  @media(max-width: 1200px){
    flex-direction: column;
    span{
      display: none;
    }
  }
`;

