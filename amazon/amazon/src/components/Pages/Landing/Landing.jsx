import React from "react";
// import LayOut from '../../LayOut/LayOut';
import Header from "../../Header/Header.jsx";
import Category from "../../Category/Category.jsx";
import { Outlet } from "react-router-dom";
import Product from "../../Product/Product.jsx";
import CarouselEffect from "../../carousel/Carousel.jsx";
function Landing() {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default Landing;
