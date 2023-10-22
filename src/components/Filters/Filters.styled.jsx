import styled from '@emotion/styled';

export const FiltersStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 50px;
`;
export const SelectContainer = styled.div``;
export const SelectStyled = styled.select`
  border-radius: 14px;
  background-color: #f7f7fb;
  box-shadow: 0px 4px 36px 0px #00000005;
  border: 1px solid #1214170d;
  padding: 14px 18px;
`;
export const OptionStyled = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: var(--filters-choose-color-text);
`;
export const InputContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  /* max-width: 454px; */
  & input:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid #8a8a8933;
  }
  & input:nth-of-type(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const InputStyled = styled.input`
  /* max-width: 227px; */
  background-color: #f7f7fb;
  border: none;
  padding: 14px 18px;
  border-radius: 14px;

  &:focus {
    outline: none !important;
    border: 1px solid var(--brand-color);
    border-right: 1px solid var(--brand-color) !important;
  }
`;
