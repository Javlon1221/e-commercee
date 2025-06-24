export const selectCartItems = (state) => state.cart.value;

export const selectCartTotal = (state) =>
  state.cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
