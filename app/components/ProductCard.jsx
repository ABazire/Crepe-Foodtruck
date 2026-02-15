import React, { useEffect, useRef } from "react";
import LabelCustom from "./LabelCustom";
import SecondaryButton from "./SecondaryButton";
import Crepe from "../../public/images/crepe-product.png";
import Image from "next/image";
import gsap from "gsap";

function ProductCard() {
  const cardData = [
    {
      image: Crepe,
      label: "Salée",
      title: "La Normande",
      description: "Oeuf, Jambon, Creme, Camembert, Pommes, Noix",
      price: "17,60€",
    },
    {
      image: Crepe,
      label: "Salée",
      title: "La Normande",
      description: "Oeuf, Jambon, Creme, Camembert, Pommes, Noix",
      price: "17,60€",
    },
    {
      image: Crepe,
      label: "Salée",
      title: "La Normande",
      description: "Oeuf, Jambon, Creme, Camembert, Pommes, Noix",
      price: "17,60€",
    },
    {
      image: Crepe,
      label: "Salée",
      title: "La Normande",
      description: "Oeuf, Jambon, Creme, Camembert, Pommes, Noix",
      price: "17,60€",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      rotate: 5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <div className="card-ctn">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
          >
            <Image src={card.image} alt={card.title} />
            <LabelCustom>{card.label}</LabelCustom>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div>
              <span className="price">{card.price}</span>
              <SecondaryButton>Commander</SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
