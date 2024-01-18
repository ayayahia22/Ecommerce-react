 
 import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

 
 //دي hook من الراوتينج عشان تساعد تتعامل مع parmeter اللي ف urlل 
 
 function Productdetails() {
    const api_url = "https://fakestoreapi.com/products/";
    const [product  , setproducts] = useState({})
    useEffect(() => {
        fetch(`${api_url}/${Params.productId}`).then((res) => res.json()).then((product)=> setproducts(product));
      },[]);
    const Params = useParams();
    console.log (Params)
    return(<>
   <Product product={product}   />
    </>)
 };
 export default Productdetails;


