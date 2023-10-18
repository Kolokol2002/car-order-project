export const handleCarsPending = state => {
  state.isLoading = true;
};
export const handleCarsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleCarsFulfilled = (state, { payload }) => {
  state.cars = payload;
  state.isLoading = false;
  state.error = null;
};
