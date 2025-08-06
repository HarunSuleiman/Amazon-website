import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../ProductDetail/ProductDetail.module.css";

import { ProductUrl } from "../../../Api/endPoints";

import ProductCard from "../../Product/ProductCard.jsx";

import Loader from "../../Loader/Loader.jsx";

function ProductDetail() {
  const { ProductId } = useParams();
  console.log(ProductId);
  const [isLoading, setIsLoading] = useState(false);
  const [Product, setProducts] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/${ProductId}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(productId);
  return (
    <>
      <h1>Result Detail:</h1>
      <hr />
      {isLoading ? <Loader /> : <ProductCard Product={Product} 
     flex={true}
     renderDesc={true}
      />}
    </>
  );
}

export default ProductDetail;
