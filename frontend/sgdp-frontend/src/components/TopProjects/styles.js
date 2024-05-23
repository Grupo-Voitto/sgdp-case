import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:start;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--color-background-secondary);
  width: 100%;
  gap: 1rem;
  padding:1rem;
  border-radius: 6px;
  h3 {
    max-width: 15rem;
    font-size:.99rem;
    color: #FFF;
    font-weight:500;
  }

`;

export const Table = styled.table`
  width: 100%;
  thead{
    width: 100%;
    text-align: left;
    th {
      padding: 1rem;
      text-align: left;
    }
  }
  tr {
    text-align: left;
    width: 100%;
    td {
      width: 100%;
      border-bottom: 1px solid #FFFFFF20;
      padding:1rem;
      div.outbar {
        width: 100%;
        min-width: 25rem;
        background: #2B2B36;
        height: 6px;
        border-radius: 3px;
        position: relative;
      }
    }
  }
  tbody {
    tr {
      td {
        width: fit-content;
        text-align:left;
      }
    }
  }
  @media(max-width: 1200px){
    tr {
      th.p-remove{
        display: none;
      }
      td.outbar{
        display: none;

      }
    }
  }

`;
export const Progress = styled.p`
  border: 1px solid ${props => props.color};
  background: ${props => `${props.color}12`};
  color: ${props => props.color};
  border-radius: 4px;
  padding: .3rem .5rem;
`;

export const SpanBar= styled.div`
  position: absolute;
  left:0;
  border-radius: 3px;
  background: ${props => `${props.color}`};
  width: ${props => props.progress || 10}%!important;
  height: 6px;
`;