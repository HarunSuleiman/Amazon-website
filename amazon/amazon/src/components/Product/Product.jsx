// Frome fakestore product we get the all information
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import classes from "../Product/product.module.css"
import Loader from "../Loader/Loader.jsx";
function Product() {
  const [Products, setProducts] = useState([]);
   const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setProducts(res.data)
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err)
         setIsLoading(false);
    })
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {Products.map((singleProduct) => {
            return <ProductCard Product={singleProduct} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product;
