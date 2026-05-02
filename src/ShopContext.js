// ShopContext.js
import { createContext, useContext, useReducer } from "react";
import ShopReducer, { initialState } from "./ShopReducer";
// import { type } from "@testing-library/user-event/dist/type";

 const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(ShopReducer, initialState);

  const AddToCart = (product) => {
    

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
   
  };
   const DeleteProduct=(productId)=>{
      dispatch({
        type:"DELETE_FROM_CART",
        payload:productId,
      })
    };
  

  const values = {
    products: state.products,
    total: state.total,
    AddToCart,
    DeleteProduct
  };

  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
};
export default useShop;