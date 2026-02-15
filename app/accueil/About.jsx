"use client";

import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Foodtruck from "../../public/images/foodtruck.png";

function About() {
  return (
    <>
      <Container
        bgColor="var(--noir)"
        paddingBlock="0px"
        paddingInline="100px 0px"
      >
        <div className="about">
          <div>
            <h2>Le foodtruck</h2>
            <p>
              Depuis 2018, notre foodtruck sillone les rues pour vous offrir les
              meilleurs crêpes artisanales. Une passion qui a commencé dans uen
              petite cuisine en normandie.
              <br />
              <br />
              Chaque crêpe est préparée avec des ingrédients locaux et
              biologiques, dans le respect de la tradition normande. Notre pâte
              repose 24h pour une texture parfaite.
            </p>
            <hr />
            <div className="about-stats">
              <div>
                <h3>10k+</h3>
                <p>Crêpes vendues</p>
              </div>
              <div>
                <h3>50+</h3>
                <p>Evenements</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>fait maison</p>
              </div>
            </div>
            <hr />
          </div>
          <Image src={Foodtruck} alt="Foodtruck Crepe" />
        </div>
      </Container>
    </>
  );
}

About.propTypes = {};

export default About;
