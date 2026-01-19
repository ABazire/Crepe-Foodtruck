import React from "react";
import PropTypes from "prop-types";

function Container({ children }) {
  return <section className="container">{children}</section>;
}

Container.propTypes = {};

export default Container;
