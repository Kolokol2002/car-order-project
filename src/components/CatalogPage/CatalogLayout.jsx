import LoadMoreButton from 'components/Buttons/LoadMoreButton/LoadMoreButton';
import Card from 'components/Card/Card';
import Cards from 'components/Cards/Cards';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsOperation, getMoreCarsOperation } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';

const CatalogLayout = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cardsRef = useRef();
  useEffect(() => {
    (async () => {
      page === 1
        ? await dispatch(getCarsOperation(page))
        : await dispatch(getMoreCarsOperation(page));
      const lastCard = [...cardsRef.current.children].slice(-8, 1);
      console.log(lastCard);
    })();
  }, [dispatch, page]);

  const onLoadMore = async () => {
    setPage(prev => (prev += 1));
  };
  return (
    <div>
      <Cards cardsRef={cardsRef} />
      <LoadMoreButton onLoadMore={onLoadMore} />
    </div>
  );
};

export default CatalogLayout;
