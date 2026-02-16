"use client";

import React from "react";
import Container from "../../components/Container";
import SecondaryTitle from "../../components/SecondaryTitle";
import TestimonyCard from "../../components/TestimonyCard";

function Testimony() {
  const testimonyData = [
    {
      image: "/images/client1.png",
      rating: 3.5,
      testimony:
        "Probablement les meilleures crêpes que j’ai mangées dans un foodtruck.  !",
      autor: "Pierre Durand",
    },
    {
      image: "/images/client1.png",
      rating: 5.2,
      testimony: "La meilleure crêpe que j'ai jamais mangée !",
      autor: "Marie Lefevre",
    },
    {
      image: "/images/client1.png",
      rating: 4,
      testimony: "Très satisfait de la qualité.",
      autor: "Lucas Bernard",
    },
  ];

  return (
    <>
      <Container>
        <SecondaryTitle>Nos clients</SecondaryTitle>
        <div className="testimony-ctn">
          {testimonyData.slice(-3).map((testimony, index) => (
            <TestimonyCard
              key={index}
              image={testimony.image}
              rating={testimony.rating}
              testimony={testimony.testimony}
              autor={testimony.autor}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

Testimony.propTypes = {};

export default Testimony;
