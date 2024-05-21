import styled from "styled-components";

export const Container = styled.div`
  min-width: 8rem;
  background: var(--color-background-secondary);
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
  max-width: 15rem;
  width: 100%;
  border-radius: 6px;
  h3 {
    max-width: 15rem;
    font-size:.99rem;
    color: #FFF;
    font-weight:500;
  }
  @media(max-width: 1200px){
    align-self:start;
    max-width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap:1rem;
  width: 100%;
  `;
export const Graph = styled.div`
  border-bottom: 1px solid  #FFFFFF15;
  min-height: 11rem;
  height: 100%;
  display: flex;
  align-items:end;
  justify-content: space-between;
  width: 100%;
  gap:1rem;
`;
export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  p {
    padding: 0;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 1rem;
  }
  p.active {
    color:var(--color-primary);
    border-right: 1px solid #FFFFFF18;
    padding-right: .5rem;
  }
`;
export const BarTop = styled.div`
  width:13px;
  height: calc(100% - ${props => props.total}%);
  background: var(--color-background-primary);
  position:relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  span {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: calc(100% - ${props => props.total}% - ${props => props.concluido}%);
    padding:0;
    margin:0;
    width: 13px;
    background: var(--color-primary);
    position:absolute;
    bottom:0;
  }

`;