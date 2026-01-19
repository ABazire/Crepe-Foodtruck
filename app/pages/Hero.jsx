"use client";

import PrimaryButton from "../components/PrimaryButton";
import TitleH1 from "../components/TitleH1";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <nav></nav>
        <div>
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
