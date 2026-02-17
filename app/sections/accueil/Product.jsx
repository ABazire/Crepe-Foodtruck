"use client";

import React from "react";
import SecondaryTitle from "../../components/SecondaryTitle";
import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard";

function Product() {
  return (
    <Container>
      <SecondaryTitle>Nos Produits</SecondaryTitle>
      <div>
        <ProductCard />
      </div>
    </Container>
  );
}

export default Product;
