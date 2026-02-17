"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav>
      <a href="/">
        {" "}
        <Image src={logo} alt="Logo" width={100} height={50} />
      </a>
      <ul>
        <li>
          <a href="#crepes">Nos crêpes</a>
        </li>
        <li>
          <a href="#histoire">Notre histoire</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            Panier
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
