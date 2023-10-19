import Card from 'components/Card/Card';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import { CardsContainer } from './Cards.styled';

const Cards = ({ cardsRef }) => {
  const carsData = useSelector(selectCars);
  return (
    <CardsContainer ref={cardsRef}>
      {carsData?.map(cars => (
        <Card key={cars?.id} data={cars} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
