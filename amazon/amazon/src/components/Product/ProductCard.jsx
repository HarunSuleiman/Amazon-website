import React, { use, useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat.jsx";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { Type } from "../../Utility/Action.type.jsx";
function ProductCard({ Product, flex, renderDesc,renderAdd }) {
  if (!Product || !Product.image || !Product.rating || !Product.id) {
    return <div>Loading...</div>;
  }
  const { image, title, id, rating, price,description } = Product;
    
const [state,dispach]=useContext(DataContext)
// console.log(state)
const addToCart=()=>{
  dispach({
    type: Type.ADD_TO_BASKET,
    item: { image, title, id, rating, price, description },
  });
}



  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.Product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src = { image }

         alt="CLICK HERE for more/detail information " />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "650px" }}>{description}</div>}
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

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
