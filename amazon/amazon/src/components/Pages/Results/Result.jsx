import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCard from "../../Product/productCard";
import classes from "../Results/Result.module.css"
function Result() {
  const [results, setResults] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${name}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category/{name}</p>
      <hr />
      <div className={classes.product_container}>
        {results?.map((Product) => {
          return <ProductCard key={Product.id} Product={Product} />;
        })}
      </div>
    </section>
  );
}

export default Result;
