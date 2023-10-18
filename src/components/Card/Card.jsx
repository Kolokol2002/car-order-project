import React from 'react';
import {
  ButtonText,
  CardButton,
  CardStyled,
  CardTitle,
  ContainerImg,
  IconFavorite,
  Item,
  ItemText,
  List,
  MainImg,
} from './Card.styled';

import sprite from '../../assets/images/icons/icons.svg';

const Card = () => {
  return (
    <CardStyled>
      <ContainerImg>
        <MainImg src="" alt="" />
        <IconFavorite>
          <use href={`${sprite}#icon-normal-favorite`}></use>
        </IconFavorite>
      </ContainerImg>
      <CardTitle></CardTitle>
      <List>
        <Item>
          <ItemText></ItemText>
        </Item>
      </List>
      <CardButton>
        <ButtonText>Learn more</ButtonText>
      </CardButton>
    </CardStyled>
  );
};

export default Card;
