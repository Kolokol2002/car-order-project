const selectCars = state => state.cars.cars;
const selectFilterCar = state => state.cars.filterCar;
const selectCarsCount = state => state.cars.dataCount;
const selectFavorites = state => state.cars.favorites;
const selectIsLoading = state => state.cars.isLoading;
const selectError = state => state.cars.error;

export {
  selectCars,
  selectFilterCar,
  selectIsLoading,
  selectError,
  selectFavorites,
  selectCarsCount,
};
