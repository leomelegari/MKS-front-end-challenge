import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart") as string) || [];

const productsReducer = (state = defaultState, action: any) => {
  const { product } = action;
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, product];

    case REMOVE_PRODUCT:
      return [...product];

    default:
      return state;
  }
};

export default productsReducer;
