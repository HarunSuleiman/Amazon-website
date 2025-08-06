import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat.jsx";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ Product, flex, renderDesc }) {
  if (!Product || !Product.image || !Product.rating || !Product.id) {
    return <div>Loading...</div>;
  }
  const { image, title, id, rating, price,description } = Product;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.Product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt="Click here for detail information"
          className={classes.img_container}
        />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"650px"}}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
