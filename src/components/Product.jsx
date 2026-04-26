const Product=({product})=>{
  return (
    <div className="card"
    style={{minHeight:"100%", background:`linear-gradient(rgba(0,0 ,0 ,0.1),rgba(0, 0, 0, 0.1)),url(${product.urlImage})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"}}>
    <div className="info">
      <span>{product.name}</span>
      <span>{product.price}</span>
    
    </div>
    <button className="btn btn-primary">+</button>
    </div>
  )
}
export default Product;