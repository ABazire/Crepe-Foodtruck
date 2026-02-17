import React from "react";
import Hero from "@/app/sections/accueil/Hero";
import Product from "@/app/sections/accueil/Product";
import About from "./About";
import Testimony from "./Testimony";

function Accueil() {
  return (
    <>
      <Hero />
      <Product />
      <About />
      <Testimony />
    </>
  );
}

export default Accueil;
