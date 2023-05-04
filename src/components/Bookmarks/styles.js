import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 height: 5.6rem;
 
 margin-top: 1.6rem;
 margin-left: 1.6rem;
 
 background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
 color: ${({theme}) => theme.COLORS.GRAY_300};

 border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
 margin-bottom: 0.8rem;

 color: rgba(148, 143, 153, 1);
 
 border-radius: 1rem;
 padding-right: 1.6rem;
  
 > button {
  border: none;
  background: none;
  }
 
 > input {
   width: 15rem; 
   gap: 4rem;
   text-align: center;
   color: white;
   background: transparent;
      
   border: none;  
  } 

   svg {
    color: rgba(255, 133, 155, 1);
    cursor: pointer;
  }

  &::placeholder {
    color: rgba(148, 143, 153, 1);
  }
`;