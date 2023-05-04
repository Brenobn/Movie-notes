import styled from "styled-components";


export const Container = styled.textarea`
   width: 114.5rem;
   height: 27.4rem;
   margin-top: 4rem;

   background-color: rgba(38, 37, 41, 1);
   color: white;

   border: none;
   resize: none;

   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding: 1.6rem;
  
  
    &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;