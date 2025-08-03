import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../Carousel/img/data.jsx";
import classes from "../Carousel/Carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
       interval={3000}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((ImageItemLink) => {
          return <img src={ImageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
