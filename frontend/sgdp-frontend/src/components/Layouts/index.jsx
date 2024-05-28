import styled from 'styled-components';


export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  position: relative;
  div#mainDiv{
    width: calc(100% - 10rem);
    margin-left:10rem;
  }
  @media(max-width:650px){
    div#mainDiv{
      width: 100%;
      margin-left:0;
    }
  }
`;
