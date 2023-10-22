import LoadMoreButton from 'components/Buttons/LoadMoreButton/LoadMoreButton';
import Cards from 'components/Cards/Cards';
import Filters from 'components/Filters/Filters';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGetMoreCars } from 'redux/cars/carsSlice';
import { getCarsOperation, getMoreCarsOperation } from 'redux/cars/operations';
import {
  selectCars,
  selectCarsCount,
  selectFilterCar,
  selectIsLoading,
} from 'redux/cars/selectors';
// import testData from './advertsCars.json';
// import axios from 'axios';

const CatalogLayout = () => {
  const [page, setPage] = useState(1);
  const [filterPage, setFilterPage] = useState(1);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const filterCar = useSelector(selectFilterCar);
  const carsCount = useSelector(selectCarsCount);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const cardsRef = useRef();
  const carsData = useSelector(selectCars);

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

  useEffect(() => {
    if (filterPage === 1) return;
    dispatch(filterGetMoreCars(filterPage));
  }, [dispatch, filterPage]);

  useEffect(() => {
    const listCountItem = cardsRef.current?.children.length;
    if (listCountItem === carsCount) return setIsShowLoadMore(false);
    if (listCountItem === filterCar.length) {
      return setIsShowLoadMore(false);
    }
    if (carsData.length === 8) return setIsShowLoadMore(true);
    return setIsShowLoadMore(true);
  }, [
    carsCount,
    carsData.length,
    dispatch,
    filterPage,
    cardsRef,
    filterCar.length,
  ]);

  const onLoadMore = async () => {
    if (filterCar.length !== 0) {
      setFilterPage(prev => (prev += 1));
      return;
    }
    setPage(prev => (prev += 1));
  };

  return (
    <div>
      <Filters setFilterPage={setFilterPage} setPage={setPage} />
      <Cards data={carsData} cardsRef={cardsRef} />
      {isShowLoadMore && <LoadMoreButton onLoadMore={onLoadMore} />}
    </div>
  );
};

export default CatalogLayout;
