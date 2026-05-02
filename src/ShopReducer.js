// shopReducer.js
export const initialState = {
  products: [],
  total: 0,
};

const ShopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
        return {
        ...state,
        products:[...state.products,payload]
      };
    case "DELETE_FROM_CART":
  return {
    ...state,
    products: state.products.filter(
      (product) => product.id !== payload
    ),
  };

    default:
      return state;
  }
};

export default ShopReducer;