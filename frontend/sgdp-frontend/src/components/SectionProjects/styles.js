import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items:center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  @media(max-width: 1200px){
    display: flex;
    flex-direction: column;
    width:100%;
  }
`;
export const ProjectContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--color-background-secondary);
  border-radius: 6px;
`;
export const Content = styled.div`
  h2 {
    font-size:.99rem;
    color: #FFF;
    font-weight:500;
  }
  span {
    font-size:.6rem;
  }
`;
export const ContentProjects = styled.div`
  overflow-x: auto;
  display: flex;
  align-items:center;
  justify-content:flex-start;
  margin-top: 1rem;
  gap: 1.5rem;
  max-width: 48rem;
  padding: 0 0 1rem 0;
  &::-webkit-scrollbar {
      height: 2px;
      background: var(--color-background-primary);
    }
  &::-webkit-scrollbar-thumb{
    background: var(--color-primary);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-dark);
  }
  @media(max-width: 1200px){
    flex-direction:column;
    align-items: start;
    width:100%;
  }
`