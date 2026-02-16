"use client";

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Container from "../components/Container";

function Header() {
  return (
    <>
      <nav>
        <Image src={logo} alt="Logo" width={100} height={50} />
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
            <a href="#panier">Panier</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

Header.propTypes = {};

export default Header;
