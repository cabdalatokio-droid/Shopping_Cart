import useShop from "../ShopContext"

const CartProduct=()=>{
  const{products,total,DeleteProduct}=useShop();
  return(
    <div className="cart-products">
      <h2>Cart Products</h2>
      {products.map((product)=>(
        <div className="cart-product">
          <div className="cart-title-img">
            <img src={product.urlImage} alt="" />
            <span>{product.name}</span>
          </div>
          <h5>${product.price}</h5>
          <button className="delete" onClick={()=>  DeleteProduct(product.id)}>Delete
          
          </button>
         
        </div>
      ))}
      <div className="total-price">
       Total Price:${total}
        {console.log(products)}
      </div>

    </div>
  );
}
export default CartProduct;