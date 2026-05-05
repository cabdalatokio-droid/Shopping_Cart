import { use } from "react";
import CartProduct from "../components/CartProducts";
import Payment from "../components/payment";
import useShop from "../ShopContext";

const Cart=()=>{
  const{products}=useShop();
  if(products.length===0) return <h1>
    Cart is Empty
  </h1>
  return(
    <div className="cart-container">
     <CartProduct/>
     <Payment/>
    </div>
  )
}
export default Cart;