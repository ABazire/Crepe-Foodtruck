import React from "react";
import PropTypes from "prop-types";
import Hero from "@/app/accueil/Hero";
import Product from "@/app/accueil/Product";
import About from "./About";

function Accueil() {
  return (
    <>
      <Hero />
      <Product />
      <About />
    </>
  );
}

Accueil.propTypes = {};

export default Accueil;
