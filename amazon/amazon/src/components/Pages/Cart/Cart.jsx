import React, { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import classes from "./Cart.module.css"
function Cart() {
  const [{ basket, user }, dispach] = useContext(DataContext);


  const total = basket.reduce((amount,item)=>{ return item.price*item.amount+amount},0)
  console.log(basket)


  return (
    <section className={classes.container}>
      <div className={classes.cart_container}>
        <h2>Hello</h2>
        <h3>Your Shoping basket</h3>
        <hr />
        {basket?.length == 0 ? (
          <p>Opps! No item in your cart</p>
        ) : (
          basket?.map((item, i) => {
            return (
              <ProductCard
                key={i}
                Product={item}
                renderDesc={true}
                flex={true}
                renderAdd={false}
              />
            );
          })
        )}
      </div>

      {basket?.length !==0&&(
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal({basket?.length} items)</p>
            <CurrencyFormat amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/Payments">Continue to checkout</Link>
         </div>
      )}
    </section>
  );
}

export default Cart;
