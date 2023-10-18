import styled from '@emotion/styled';

export const CardStyled = styled.div``;

export const ContainerImg = styled.div`
  position: relative;
  border-radius: 14px;
  height: 268px;
`;

export const MainImg = styled.img``;

export const IconFavorite = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  fill: transparent;
  & use {
    stroke: red;
  }
`;

export const CardTitle = styled.h2``;

export const List = styled.ul``;

export const Item = styled.li``;

export const ItemText = styled.span``;

export const CardButton = styled.button`
  padding: 12px 99px;
  border-radius: 12px;
  border: none;
  background-color: var(--brand-color);
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--button-color-text);
`;
