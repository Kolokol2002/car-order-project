import Card from 'components/Card/Card';
import React from 'react';
import { CardsContainer } from './Cards.styled';

const Cards = ({ cardsRef, data }) => {
  return (
    <CardsContainer ref={cardsRef}>
      {data?.map(cars => (
        <Card key={cars?.id} data={cars} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
