// import CarouselEffect from "./components/carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Header from "./components/Header/Header";
// import Category from "./components/Category/Category.jsx";
// import Product from "./components/Product/Product.jsx";
// import Landing from "./components/Pages/Landing/Landing.jsx";
//FOR SIGN OUT...
import { Type } from "./Utility/Action.type.jsx";
import { auth } from "./Utility/Firebase.jsx";
import Routing from "./Router.jsx";
import { useContext,useEffect } from "react";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";
function App() {
const [{user},dispach]=useContext(DataContext)
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if (authUser){
    dispach({
      type:Type.SET_USER,
      user:authUser
    })
  }else{
    dispach({
      type: Type.SET_USER,
      user: null
    });
  }
})
},[])

  return (
    <div>
      
      <Routing />
      
    </div>
  );
}

export default App;
