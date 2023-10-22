const { default: styled } = require('@emotion/styled');

export const ImageMain = styled.img`
  border-radius: 14px;
  height: 248px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 14px;
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 24px;
  color: var(--main-color-text);
`;
export const Title = styled.h3`
  font-size: 14px;
  line-height: 20px;
  color: var(--main-color-text);
  margin-bottom: 8px;
`;
export const ListConditional = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const ItemConditional = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  padding: 7px 14px;
  border-radius: 35px;
  color: var(--rental-text-color);
  background-color: var(--rental-item-bg-color);
`;
export const TextConditional = styled.span``;
export const AccentConditional = styled.span`
  font-weight: 600;
  color: var(--brand-color);
`;
