import Cards from 'components/Cards/Cards';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';

const FavoritesLayout = () => {
  const cardsRef = useRef();
  const carsFavoriteData = useSelector(selectFavorites);
  return (
    <div>
      <Cards data={carsFavoriteData} cardsRef={cardsRef} />
    </div>
  );
};

export default FavoritesLayout;
