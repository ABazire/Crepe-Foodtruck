import React from "react";

function SecondaryButton({ children, href }) {
  return (
    <a href={href} className="secondary-button">
      {children}
    </a>
  );
}

export default SecondaryButton;
