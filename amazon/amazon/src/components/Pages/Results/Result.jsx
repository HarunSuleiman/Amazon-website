import React, { useEffect, useState } from "react";

import ProductCard from "../../Product/ProductCard.jsx"

import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/endPoints";



import classes from "../Results/Result.module.css";
import Loader from "../../Loader/Loader.jsx";
function Result() {
  const [Results, setResults] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const { Name } = useParams();
  //   console.log(Name)
  useEffect(() => {
     setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${Name}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
                // console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [Name]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.sec}>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{Name}</p>
          <hr />
          <div className={classes.product_container}>
            {Results?.map((Product) => {
              return <ProductCard 
              key={Product.id} 
              Product={Product} 
              renderAdd={true}
                  
              />;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Result;
