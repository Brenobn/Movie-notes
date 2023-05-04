import styled from "styled-components";


export const Container = styled.div `
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 105px auto;
 grid-template-areas: 
 "header"
 "content" ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
   display: flex;
   flex-wrap: wrap;
   gap: 2.4rem;

   background-color: rgba(13, 12, 15, 1);
   height: 9rem;
   width: 114.6rem;
   border-radius: 1rem;
   margin-top: 2.4rem;
 }

 .button {
   display: inline-flex;

   gap: 7.5rem;
   
  
   margin-top: 4.5rem;
 }

`

export const Form = styled.form`
  max-width: 55rem;
  margin: 15rem ;
  margin-top: 4rem;

  > header {
    margin-bottom: 4rem;
   h1{
    margin-top: 2.4rem;
   }

   a{
    color: #FF859B;
   }
   
   svg {
    color: #FF859B;
    margin-right: 0.8rem;
   }
  }
 
 > div input {
  height: 5.6rem;
  width: 55rem;
  padding: 1.2rem;
  margin-top: 2rem;
  
  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;
  border-radius: 1rem;
  background-color: #262529;
  
  &::placeholder { 
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
}

> .input {
  display: flex;
  gap: 4rem;
 }

 >h3 {
  color: rgba(153, 149, 145, 1);
  margin-top: 4rem;
 }
`;