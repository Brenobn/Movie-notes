import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;

 background-color: rgba(38, 37, 41, 1);

 margin-bottom: 0.8rem;
 border-radius: 1rem;

 > input {
  height: 5.6rem ;
  width: 100%;

  padding: 1.2rem;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;

  &::placeholder { 
   color: ${({theme}) => theme.COLORS.GRAY_300};
  }

 }

 svg {
    margin-left: 1.6rem;
    color: rgba(148, 143, 153, 1);
  }
`;