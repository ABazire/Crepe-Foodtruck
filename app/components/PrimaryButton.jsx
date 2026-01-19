import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({ children }) {
  return (
    <>
      <a href="#" className="primary-button">
        {children}
      </a>
    </>
  );
}

PrimaryButton.propTypes = {};

export default PrimaryButton;
