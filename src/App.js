import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Products from "./pages/products/products.jsx";
import Gallery from "./pages/gallery/gallery";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Header from "./contents/header";
import Footer from "./contents/Footer/footer";

const App = () => {
  return (
    <Router>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    <Footer/>
    </Router>
    )
};

export default App;
