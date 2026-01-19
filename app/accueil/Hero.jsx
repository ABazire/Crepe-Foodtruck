"use client";

import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";
import TitleH1 from "../components/TitleH1";

// images
import fraise from "../../public/images/fraise.png";
import fraiseblur from "../../public/images/fraise-blur.png";
import choco from "../../public/images/choco.png";
import chocoblur from "../../public/images/choco-blur.png";
import crepechoco from "../../public/images/crepe-choco.png";
import crepecara from "../../public/images/crepe-cara.png";
import crepe from "../../public/images/crepe.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const fraiseRef = useRef(null);
  const fraiseBlurRef = useRef(null);

  const chocoRef = useRef(null);
  const chocoBlurRef = useRef(null);

  const crepeCaraRef = useRef(null);
  const crepeChocoRef = useRef(null);
  const crepeRef = useRef(null);

  useEffect(() => {
    gsap.from([fraiseRef.current, fraiseBlurRef.current], {
      opacity: 0,
      x: -100,
      duration: 1,
      zIndex: 9,
    });

    gsap.from([chocoRef.current, chocoBlurRef.current], {
      opacity: 0,
      y: -100,
      duration: 1,
    });

    gsap.from([crepeRef.current], {
      opacity: 0,
      y: 350,
      rotate: 20,
      duration: 1,
    });

    gsap.from([crepeChocoRef.current], {
      opacity: 0,
      y: 350,
      rotate: -20,
      duration: 1,
    });

    gsap.from([crepeCaraRef.current], {
      opacity: 0,
      y: 350,
      duration: 1,
    });
  }, []);

  return (
    <>
      <section className="hero-section">
        <nav></nav>
        <div>
          <Image
            ref={fraiseRef}
            className="absolute fraise"
            src={fraise}
            alt="fraise foodtruck de crepe"
          />
          <Image
            ref={fraiseBlurRef}
            className="absolute fraise-blur"
            src={fraiseblur}
            alt="fraise blur foodtruck de crepe"
          />
          <Image
            ref={chocoRef}
            className="absolute choco"
            src={choco}
            alt="choco foodtruck de crepe"
          />
          <Image
            ref={chocoBlurRef}
            className="absolute choco-blur"
            src={chocoblur}
            alt="choco blur foodtruck de crepe"
          />
          <Image
            ref={crepeChocoRef}
            className="absolute crepe-choco"
            src={crepechoco}
            alt="crepe choco foodtruck de crepe"
          />
          <Image
            ref={crepeCaraRef}
            className="absolute crepe-cara"
            src={crepecara}
            alt="crepe cara foodtruck de crepe"
          />
          <Image
            ref={crepeRef}
            className="absolute crepe"
            src={crepe}
            alt="crepe foodtruck de crepe"
          />
          <TitleH1>
            Délicieuse et unique <br /> crepe normande
          </TitleH1>
          <div className="list-hero">
            <p>Fait maison</p>
            <p>·</p>
            <p>Food truck</p>
            <p>·</p>
            <p>Artisan</p>
          </div>
          <PrimaryButton>Voir le menu</PrimaryButton>
        </div>
      </section>
    </>
  );
}
