"use client";

import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

function Header() {
  const { isCartOpen, toggleCart } = useContext(CartContext);
  return (
    <>
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
            <a href="#panier" onClick={toggleCart}>
              Panier
            </a>
          </li>
        </ul>
      </nav>

      {isCartOpen && (
        <section className="overlay">
          <Cart />
        </section>
      )}
    </>
  );
}

export default Header;
