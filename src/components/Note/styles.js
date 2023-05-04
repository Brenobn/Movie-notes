import styled from "styled-components";


export const Container = styled.button`
 width: 119.5rem;
 background-color:rgba(255, 133, 155, 0.05);

 border: none;
 border-radius: 1rem;
 padding: 2.2rem;
 margin-bottom: 1.6rem;
 
 display: block;
 margin-left: 15rem;
 cursor: pointer;

 > h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 2.4rem;
  color:${({theme})  => theme.COLORS.WHITE};
 }

  > p {
    font-size: 1.6rem;
    color: rgba(153, 149, 145, 1);
    font-weight: 400;

    text-align: left;
  }
 
 > svg {
  margin-right: 106.5rem;
  margin-top: 0.8rem;
 }

 > footer {
  display: flex;
  margin-top: 2.4rem;

  width: 100%;
 }
`;