import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin, Signup, Homepage } from "pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

const App = () => {
  return (
    <Router>
      <div className="w-screen flex justify-center">
        <div className="max-w-[1440px] h-10 w-full">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="account" element={<div>account</div>} />
            <Route path="cart" element={<div>cart</div>} />
            <Route path="checkout" element={<div>checkout</div>} />
            <Route path="category" element={<div>category</div>} />
            <Route path="product" element={<div>product</div>} />
            <Route path="*" element={<div>No page found</div>} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
