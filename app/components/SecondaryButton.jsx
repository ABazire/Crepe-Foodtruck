import React from "react";
import PropTypes from "prop-types";

function SecondaryButton({ children }) {
  return <a className="secondary-button">{children}</a>;
}

SecondaryButton.propTypes = {};

export default SecondaryButton;
