import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat.jsx"
import classes from "../Product/Product.module.css"
function ProductCard({Product}) {
    const {image,title,id,rating,price}=Product;
   
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image}      alt="image" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price}/>
        </div>
        <button>
            add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
