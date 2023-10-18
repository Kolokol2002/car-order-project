const selectCars = state => state.cars.cars;
const selectFilters = state => state.cars.filters;
const selectFavorites = state => state.cars.favorites;
const selectIsLoading = state => state.cars.isLoading;
const selectError = state => state.cars.error;

export {
  selectCars,
  selectFilters,
  selectIsLoading,
  selectError,
  selectFavorites,
};
