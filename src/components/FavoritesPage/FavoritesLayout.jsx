import Cards from 'components/Cards/Cards';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';
import { EmptyCardsText, LinkStyled } from './FavoriteLayout.styled';

const FavoritesLayout = () => {
  const cardsRef = useRef();
  const carsFavoriteData = useSelector(selectFavorites);
  return (
    <div>
      {carsFavoriteData?.length === 0 ? (
        <EmptyCardsText>
          Empty favorites cards. Go to{' '}
          <LinkStyled to={'/catalog'}>catalog</LinkStyled> and add your favorite
          car.
        </EmptyCardsText>
      ) : (
        <div>
          <Cards data={carsFavoriteData} cardsRef={cardsRef} />
        </div>
      )}
    </div>
  );
};

export default FavoritesLayout;
