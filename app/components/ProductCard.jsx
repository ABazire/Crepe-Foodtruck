import React, { useEffect, useRef } from "react";
import LabelCustom from "./LabelCustom";
import SecondaryButton from "./SecondaryButton";
import Crepe from "../../public/images/crepe-product.png";
import Image from "next/image";
import gsap from "gsap";
import { products } from "@/app/data/products";

function ProductCard() {
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
        {products.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
          >
            <Image src={card.image} alt={card.title} width={150} height={150} />
            <LabelCustom>{card.label}</LabelCustom>
            <h3>{card.title}</h3>
            <p>{card.abstract}</p>
            <div>
              <span className="price">{card.price}</span>
              <SecondaryButton href={`/produits/${card.slug}`}>
                Commander
              </SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
