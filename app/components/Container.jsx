import React from "react";
import PropTypes from "prop-types";

function Container({
  children,
  bgColor = "var(--background)",
  paddingBlock,
  paddingInline,
}) {
  return (
    <section
      className="container"
      style={{
        backgroundColor: bgColor,
        paddingBlock: paddingBlock || "75px",
        paddingInline: paddingInline || "100px",
      }}
    >
      {children}
    </section>
  );
}

Container.propTypes = {
  bgColor: PropTypes.string,
};

export default Container;
