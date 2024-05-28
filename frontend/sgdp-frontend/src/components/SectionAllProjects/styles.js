import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap:1rem;
  @media(max-width: 1200px){
    flex-direction: column;
  }
`;
export const ProjectContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--color-background-secondary);
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  border-radius: 6px;
  max-width: 100%;
`;
export const Content = styled.div`
  max-width: 100%;
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
  width: 100%;
  overflow-x: auto;
  display: flex;
  align-items:center;
  justify-content:flex-start;
  margin-top: 1rem;
  gap: 1.5rem;
  padding-bottom:.5rem;

  &::-webkit-scrollbar {
      margin-top:1rem;
      height: 2px;
      background: var(--color-secondary);
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