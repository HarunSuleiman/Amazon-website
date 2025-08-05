import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Landing from "./components/Pages/Landing/Landing.jsx";
import SignUp from "./components/Pages/Auth/Signup.jsx";
import Payment from "./components/Pages/Payment/Payment.jsx";
import Orders from "./components/Pages/Orders/Orders.jsx";
import Cart from "./components/Pages/Cart/Cart.jsx";
import Results from "./components/Pages/Results/Result.jsx"

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignIn" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:name" element={<Results/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
