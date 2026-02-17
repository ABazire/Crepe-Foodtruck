"use client";

import Image from "next/image";
import React, { useState } from "react";
import LabelCustom from "./LabelCustom";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice =
    quantity * parseFloat(product.price.replace("€", "").replace(",", "."));

  return (
    <div className="product-item">
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <div>
        <LabelCustom>{product.label}</LabelCustom>
        <h3>{product.title}</h3>
        <div>
          {product.ingredients.map((ingredient, index) => (
            <LabelCustom key={index}>{ingredient}</LabelCustom>
          ))}
        </div>
        <span className="price">
          {totalPrice.toFixed(2).replace(".", ",")}€
        </span>
        <div className="command-ctn">
          <div className="quantity-ctn">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button>Ajouter au panier</button>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
