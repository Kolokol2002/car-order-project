import styled from '@emotion/styled';

export const MainButtonStyled = styled.button`
  text-align: center;
  width: ${({ width }) => width};
  font-size: 14px;
  font-weight: 600;

  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: var(--brand-color);
  color: var(--button-color-text);
  cursor: pointer;

  &:hover {
    background-color: var(--hover-color-bg);
  }
`;
