import LoadMoreButton from 'components/Buttons/LoadMoreButton/LoadMoreButton';
import Cards from 'components/Cards/Cards';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsOperation, getMoreCarsOperation } from 'redux/cars/operations';
import { selectIsLoading } from 'redux/cars/selectors';
// import testData from './advertsCars.json';
// import axios from 'axios';

const CatalogLayout = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const cardsRef = useRef();
  useEffect(() => {
    (async () => {
      page === 1
        ? await dispatch(getCarsOperation(page))
        : await dispatch(getMoreCarsOperation(page));
      // testData.map(async item => {
      //   await axios.post('/cars', item);
      // });
    })();
  }, [dispatch, page]);

  useEffect(() => {
    if (isLoading) return;
    if (cardsRef.current?.children.length <= 8) return;
    const lastCard = [...cardsRef.current?.children].slice(-8)[0];
    lastCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [isLoading]);

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
