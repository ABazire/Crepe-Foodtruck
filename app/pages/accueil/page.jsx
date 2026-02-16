import React from "react";
import PropTypes from "prop-types";
import Hero from "@/app/pages/accueil/Hero";
import Product from "@/app/pages/accueil/Product";
import About from "./About";
import Testimony from "./Testimony";
import Layout from "../../layouts/layout";

function Accueil() {
  return (
    <>
      <Layout>
        <Hero />
        <Product />
        <About />
        <Testimony />
      </Layout>
    </>
  );
}

Accueil.propTypes = {};

export default Accueil;
