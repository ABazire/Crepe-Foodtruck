import React from "react";
import PropTypes from "prop-types";

function TitleH1({ children }) {
  return (
    <>
      <h1 className="titleh1">{children}</h1>
    </>
  );
}

TitleH1.propTypes = {};

export default TitleH1;
