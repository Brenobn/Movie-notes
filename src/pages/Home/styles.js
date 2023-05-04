import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 
 background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

 > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 19rem;
  margin-top: 5rem;
  margin-left: 15.2rem;
  margin-bottom: 4rem;
 }
`;

export const Content = styled(Link)`
 padding: 0 6.4rem;
 overflow-y: auto;
 `;

export const NewNotes =  styled(Link)`

 background-color: ${({theme}) => theme.COLORS.PINK};
 color: rgba(28, 27, 30, 1);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 20.7rem;
 height: 4.8rem ;
 border-radius: 1rem;

 border: none;
 cursor: pointer;

 svg {
  margin-right: 0.8rem;
 }
`;