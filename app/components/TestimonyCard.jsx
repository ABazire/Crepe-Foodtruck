import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i}>&#9733;</span>); // étoile pleine
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i} style={{ position: "relative", display: "inline-block" }}>
          <span style={{ color: "#ccc" }}>&#9733;</span>
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              overflow: "hidden",
              width: "50%",
            }}
          >
            &#9733;
          </span>
        </span>,
      ); // demi-étoile
    } else {
      stars.push(
        <span key={i} style={{ color: "#ccc" }}>
          &#9733;
        </span>,
      ); // étoile vide
    }
  }
  return <div className="star-rating">{stars}</div>;
}

function TestimonyCard({ rating = 5, autor, testimony, image }) {
  return (
    <>
      <div className="testimony-card">
        <Image src={image} alt="Client 1" width={100} height={100} />
        <div>
          <p>"{testimony}"</p>
          <div>
            <span>{autor}</span>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </>
  );
}

TestimonyCard.propTypes = {
  rating: PropTypes.number,
  autor: PropTypes.string,
  testimony: PropTypes.string,
};

export default TestimonyCard;
