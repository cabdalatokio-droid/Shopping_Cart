import CartProduct from "../components/CartProducts";
import Payment from "../components/payment";

const Cart=()=>{
  return(
    <div className="cart-container">
     <CartProduct/>
     <Payment/>
    </div>
  )
}
export default Cart;