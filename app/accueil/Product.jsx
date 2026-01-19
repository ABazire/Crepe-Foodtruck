"use client";

import React from "react";
import PropTypes from "prop-types";
import SecondaryTitle from "../components/SecondaryTitle";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

function Product() {
  return (
    <>
      <Container>
        <SecondaryTitle>Nos Produits</SecondaryTitle>
        <div>
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

Product.propTypes = {};

export default Product;
