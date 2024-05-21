import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  @media(max-width: 1200px){
    flex-direction: column;
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
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  align-items:center;
  justify-content:flex-start;
  margin-top: 1rem;
  gap: 1.5rem;

  &::-webkit-scrollbar {
      height: 2px;
      background: var(--color-primary);
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