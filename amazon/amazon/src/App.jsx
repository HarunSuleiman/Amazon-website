import CarouselEffect from "./components/carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category.jsx";
import Product from "./components/Product/Product.jsx";
function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
