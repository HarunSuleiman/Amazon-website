import React, { useEffect, useState } from "react";

import ProductCard from "../../Product/ProductCard.jsx";

import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/endPoints";
import LayOut from "../../LayOut/LayOut.jsx";
import classes from "../Results/Result.module.css";
import Loader from "../../Loader/Loader.jsx";
function Result() {
  const [Results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(categoryName)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          categoryName
        )}`
      )
      .then((res) => {
         console.log("Category products:", res.data);
        setResults(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.sec}>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>
            Category / {decodeURIComponent(categoryName)}
          </p>
          <hr />
          <div className={classes.product_container}>
            {Results?.map((Product) => {
              return (
                <ProductCard
                  key={Product.id}
                  Product={Product}
                  renderAdd={true}
                />
              );
            })}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Result;
