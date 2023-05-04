import styled from "styled-components";

export const Container = styled.button`
  background: none;

  color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
  font-size: 1.6rem;

  border: none;
  cursor: pointer;
`;