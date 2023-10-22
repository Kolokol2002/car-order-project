export const handleCarsPending = state => {
  state.isLoading = true;
};
export const handleCarsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleCarsFulfilled = (state, { payload }) => {
  state.cars = payload.data;
  state.dataCount = payload.dataCount;
  state.isLoading = false;
  state.error = null;
};

export const handleCarsMoreFulfilled = (state, { payload }) => {
  state.cars.push(...payload);
  state.isLoading = false;
  state.error = null;
};

export const handleFilterCarsFulfilled = (state, { payload }) => {
  if (!payload.isFiltered) {
    state.filterCar = [];
    state.cars = payload.data;
    state.isLoading = false;
    state.error = null;
    return;
  }
  state.filterCar = payload.data;
  state.cars = payload.data.slice(0, 8);

  state.isLoading = false;
  state.error = null;
};
