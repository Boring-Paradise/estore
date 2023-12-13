import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CategoryButtons from "./components/CategoryButtons";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <CategoryButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/category/:category" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
