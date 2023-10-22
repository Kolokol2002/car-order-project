import styled from '@emotion/styled';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
`;

export const ContainerImg = styled.div`
  position: relative;
  border-radius: 14px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const MainImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: #c5c5c5e6;
`;

export const IconFavorite = styled.svg`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 14px;
  right: 14px;
  fill: ${({ active }) =>
    active ? 'var(--brand-color);' : 'var(--button-color-text);'};
`;

export const CardTitle = styled.h2`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`;

export const Make = styled.span`
  white-space: nowrap;
`;
export const Model = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--brand-color);
`;
export const Year = styled.span`
  /* display: inline-block; */
  margin-right: auto;
`;
export const Cost = styled.span`
  margin-left: 20px;
`;

export const List = styled.ul`
  margin-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
`;

export const Item = styled.li``;

export const ItemText = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--second-color-text);
  white-space: nowrap;
`;

export const CardButton = styled.div`
  display: block;
  width: 100%;
  margin-top: auto;
`;
