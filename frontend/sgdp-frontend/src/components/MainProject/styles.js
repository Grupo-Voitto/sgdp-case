import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: var(--color-background-secondary);
  padding: .5rem 1rem 2rem 1rem;
  gap: 1rem;
  border-radius: 6px;

  h3 {
    font-size:.99rem;
    color: #FFF;
    font-weight:500;
    text-align: left;
  }
  @media(max-width: 1200px){
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .2rem;
  p {
    font-size:.8rem;
    line-height: 1.4rem;
  }

`;
export const ContentTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  div.member-session{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:.5rem;
    span.add-member{
      font-size: .6rem;

    }
    &:hover{
      cursor: pointer;
      color:#FFF;
    }
  }
`;
export const MemberComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
  color: #000;
  padding: .2rem .3rem;
  border-radius: 6px;
  gap:.3rem;
  span{
    font-size: .6rem;
  }
  /* svg {
    width: 1rem;
    height: 1rem;
  } */
`;
export const ContentTasks = styled.div`
  width: 100%;

`;
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    p { 
      color:#A9DFD8;
      strong {
        color: #FFF;
      }
    }
  }
  strong{
    padding:.4rem;
    font-size: .6rem;
    width:1rem;
    height: 1rem;
    background: var(--color-background-tertiary);
    border-radius: .5rem;
  } 

`;
export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
  background:var(--color-background-tertiary);
  padding: 1rem .5rem;
  border-radius: 6px;
  color: ${props => props.status === 1 ? "var(--color-text)" : "#FFF"};
  ${props => props.status === 1 && `text-decoration: line-through ;` }
  p{
    font-size: .8rem;
  }
  div{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: .65rem;
    border:1px solid ${props => props.color};
    background: transparent;
  }
  div.check{
    background: ${props => props.color};
    /* position: relative; */
    display: flex;
    align-items:center;
    justify-content:center;
    svg {
      /* position: absolute; */
      top:0;
      right:0;
      width: .8rem;
      height: .8rem;
    }
  }
  transition: var(--transition);
  &:hover{
    cursor: pointer;
    transform: scale(1.01);
  }
  @media(max-width: 1200px){ 

    p{
       width: fit-content;
       padding:0;
       margin:0;
    }
    svg {
    width:20px;
    height: 20px;
  }
    div {
      width: 20px;
      height: 20px;
    }
    div.check{
      svg{
        width: 20px;
        height: 20px;
      }
      
    }
  }
`;
export const ButtonCreate = styled.button`
  padding: .5rem;
  background: ${props=> props.color};
  color:#000;
  border-radius: 6px;
  margin:0 auto;
`;