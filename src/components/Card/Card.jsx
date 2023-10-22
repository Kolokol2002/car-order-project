import React, { useEffect, useState } from 'react';
import {
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
import plug_auto from '../../assets/images/plug_auto.png';
import ModalCar from 'components/ModalCar/ModalCar';
import MainButton from 'components/Buttons/MainButton/MainButton';

const Card = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  const onOpenModal = () => {
    setIsOpenModal(true);
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
        <MainImg src={data?.img ?? plug_auto} alt={data.make} />
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
          <ItemText>{`${data?.type}`}</ItemText>
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
        <MainButton onClick={onOpenModal} width={'100%'}>
          Learn more
        </MainButton>
      </CardButton>
      {isOpenModal && (
        <ModalCar
          data={data}
          isOpen={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          formatAddress={formatAddress}
        />
      )}
    </CardStyled>
  );
};

export default Card;
