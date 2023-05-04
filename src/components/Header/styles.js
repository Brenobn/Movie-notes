import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
 grid-area: header;
 
 height: 105px;
 width: 100%;

 border-bottom-width: 1px;
 border-bottom-style: solid;
 border-bottom-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700};

 display: flex;
 justify-content: space-between;

 padding: 0 8rem;


 div {
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
  line-height: 2.4rem;

  margin-top: 3rem;
 }

 span {
   font-size: 1.4rem;
   color: #948F99;
   text-align: right;

   cursor: pointer;
  }

  
 strong {
  font-size: 1.6rem;
  color: ${( { theme } ) => theme.COLORS.WHITE };
 }

`;

export const Input = styled.input`
 height: 5.6rem ;
 width: 63rem;
 display: flex;
 align-items: center;

 background-color: rgba(38, 37, 41, 1);

 border-radius: 1rem;
 border: 0; 
 margin-top: 2.5rem;
 margin-left: 6.4rem;
 margin-right: 6.4rem;
 padding-left: 2.4rem;
 color: white;

  &::placeholder { 
   color: ${({theme}) => theme.COLORS.GRAY_300};
   padding-left: 2.4rem;
  }

  > svg {
    color: #948F99;
  }
`;

export const Profile = styled(Link)`
 display: flex;
 align-items: center;
 margin-right: 12.3rem;
 

 > img {
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  margin-left: 0.9rem;
 }
`;

export const Logout = styled(Link)`
 border: none;
 background: none;
 cursor: pointer;
 margin-top: 3.6rem;

 > h1 {
  font-size: 2.4rem;
  color: rgba(255, 133, 155, 1);
  margin-left: 7rem;
 }
`;