import { useEffect, useState } from "react";
import Product from "./product";

function Productlist() {
  const api_url = "https://fakestoreapi.com/products";
  const [products , setproducts] = useState([]);
  useEffect(() => {
    fetch(api_url).then((res) => res.json()).then((data)=> setproducts(data));
  },[]);
  return (
    <>
      <h2 className="text-center p-3">Product list </h2>
      <div className="container">
        <div className="row p-3" >
        {products.map((product)=>{
          return(
            <div className="col-3" key={product.id}>
            <Product product={product}/>
          </div>)})}
        </div>
      </div>
    </>
  );
}
export default Productlist;
