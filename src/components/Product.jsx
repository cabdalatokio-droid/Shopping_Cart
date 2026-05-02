import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product=({product})=>{
 const{ AddToCart, DeleteProduct,products} =useShop();
 const [isInCart,setCart]=useState(false);

 useEffect(()=>{
   const isCart=products.filter((pro)=>pro.id==product.id);
   if(isCart.length>0){
    setCart(true);
   }
   else{
    setCart(false);
   }

 },[products])
  //  const isInCart = products.some(
  //   (item) => item.id === product.id
  // );
 const checkthetheRoduct=()=>{
  if(isInCart){
     DeleteProduct(product.id);
  }
  else{
     AddToCart(product);
  }
 }
  

  return (
    <div className="card"
    style={{minHeight:"100%", background:`linear-gradient(rgba(0,0 ,0 ,0.1),rgba(0, 0, 0, 0.1)),url(${product.urlImage})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"}}>
    <div className="info">
      <span>{product.name}</span>
      <span>{product.price}</span>
    
    </div>
   <button className={`btn ${isInCart?"btn-secondary":"btn-primary"}`} onClick={checkthetheRoduct}>{isInCart?"-":"+"}</button>
  
  
    </div>
  )
}
export default Product;