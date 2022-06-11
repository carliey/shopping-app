import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
      break;
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = { selectedProduct: {} },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
