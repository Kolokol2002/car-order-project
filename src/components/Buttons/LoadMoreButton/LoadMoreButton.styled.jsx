const { default: styled } = require('@emotion/styled');

export const LoadMoreButtonStyled = styled.button`
  display: block;
  margin: 100px auto 0;
  font-size: 16px;
  line-height: 24px;

  border: none;
  background-color: transparent;
  color: var(--brand-color);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--hover-color-bg);
  }
`;
