"use client";

import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

layout.propTypes = {};

export default layout;
