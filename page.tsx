import React from "react";import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Category from "./components/category";
import Music from "./music";
import Flash from "./components/flash";
import Explore from "./components/exploreproducts";
import Delivery from "./components/delivery";
import Feature from "./components/feature";
import Products from "./components/products";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Flash/>
        <Category/>
        <Music/>
        <Products/>
        <Explore/>
        <Feature/>
       <Delivery/>
       <Footer/>

    </div>
  );
}
 