import React, { useEffect, useState } from 'react';
import {
  ButtonText,
  CardButton,
  CardStyled,
  CardTitle,
  ContainerImg,
  Cost,
  IconFavorite,
  Item,
  ItemText,
  List,
  MainImg,
  Make,
  Model,
  Year,
} from './Card.styled';

import sprite from '../../assets/images/icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoriteCard, pushFavoriteCard } from 'redux/cars/carsSlice';
import { selectFavorites } from 'redux/cars/selectors';
import { json } from 'react-router-dom';

const Card = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCards = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    favoriteCards.find(({ id }) => id === data.id && setIsFavorite(true));
  }, [data.id, favoriteCards]);

  // const {
  //   id,
  //   year,
  //   make,
  //   model,
  //   type,
  //   img,
  //   description,
  //   fuelConsumption,
  //   engineSize,
  //   accessories,
  //   functionalities,
  //   rentalPrice,
  //   rentalCompany,
  //   address,
  //   rentalConditions,
  //   mileage,
  // } = data;
  // const formatYear = year => {
  //   const res = year.split('-')[0];
  //   return res;
  // };

  // const formatCost = cost => {
  //   const res = cost.split('.')[0];
  //   return res;
  // }

  const formatAddress = year => {
    const res = year.split(',').slice(-2).join(', ');
    return res;
  };
  const onFavoriteAdd = data => {
    dispatch(pushFavoriteCard(data));
  };

  const onFavoriteDelete = id => {
    dispatch(deleteFavoriteCard(id));
    setIsFavorite(false);
  };

  const addDotText = (letter, text, before) => {
    const textArray = text.split('');
    const beforeText = before.split('');
    if (beforeText.length > 8) {
      letter = 2;
    }
    if (textArray.length > letter) {
      let formatText = textArray.slice(0, letter).join('');

      return (formatText += '...');
    }
    return text;
  };

  return (
    <CardStyled>
      <ContainerImg>
        <MainImg src={data?.img} alt="" />
        {isFavorite ? (
          <IconFavorite active onClick={() => onFavoriteDelete(data.id)}>
            <use xlinkHref={`${sprite}#icon-active-favorite`}></use>
          </IconFavorite>
        ) : (
          <IconFavorite onClick={() => onFavoriteAdd(data)}>
            <use xlinkHref={`${sprite}#icon-normal-favorite`}></use>
          </IconFavorite>
        )}
      </ContainerImg>
      <CardTitle>
        <Make>{data?.make}</Make>
        <Model>{` ${addDotText(9, data?.model, data?.make)}, `}</Model>
        <Year>{data?.year}</Year>
        <Cost>{`${data?.rentalPrice}`}</Cost>
      </CardTitle>
      <List>
        <Item>
          <ItemText>{formatAddress(data?.address)}</ItemText>
        </Item>
        <Item>
          <ItemText>{data?.rentalCompany}</ItemText>
        </Item>
        <Item>
          <ItemText>{`${data?.type} premium`}</ItemText>
        </Item>
        <Item>
          <ItemText>{data?.model}</ItemText>
        </Item>
        <Item>
          <ItemText>{data?.mileage}</ItemText>
        </Item>
        <Item>
          <ItemText>{data?.functionalities[0]}</ItemText>
        </Item>
      </List>
      <CardButton>
        <ButtonText>Learn more</ButtonText>
      </CardButton>
    </CardStyled>
  );
};

export default Card;
