import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsOperation } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const carsData = useSelector(selectCars);
  useEffect(() => {
    (async () => {
      await dispatch(getCarsOperation());
    })();
  }, [dispatch]);

  const onLoadMore = async () => {
    await dispatch(getCarsOperation());
  };

  console.log(carsData);

  return (
    <div>
      CatalogPage <button onClick={onLoadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
