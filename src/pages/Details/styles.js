import styled from "styled-components";

export const Container = styled.div` 
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
`;


export const Content = styled.div`
 max-width: 113.7rem;
 max-height: 60rem;

 display: flex;
 flex-direction: column;
 margin-left: 12.3rem;
 margin-right: 12.3rem;

 > div {
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 2.4rem;

  display: flex;
  gap: 1rem;

  svg {
    margin-top: 2.5rem;
  }
 }

 > p {
  font-size: 1.6rem;
  margin-top: 4rem;
  text-align: justify;

  margin-bottom: -1.5rem;
 }


  > header {  
      margin-top: -3rem;
    a {
     color:rgba(255, 133, 155, 1);

     margin-left: 0.8rem;
    }

    svg {
      color: rgba(255, 133, 155, 1);
    }
  }


  > .information {
    
     
    img {
      width: 1.6rem;
      height: 1.6rem;

      margin-top: 0.3rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: rgba(244, 237, 232, 1);
    }

    svg {
      color: rgba(255, 133, 155, 1);
      margin-top: 1px;
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 0.8rem;
    }
  }
`;