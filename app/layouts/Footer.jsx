"use client";

import React from "react";
import Container from "../components/Container";
import SecondaryTitle from "../components/SecondaryTitle";

function Footer() {
  return (
    <Container bgColor="var(--noir)">
      <footer>
        <SecondaryTitle color="var(--orange)">Contactez-nous</SecondaryTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet,
          molestias vero fugiat doloremque quisquam perspiciatis facere nihil
          nulla sapiente sint exercitationem qui? Ex inventore commodi
          reprehenderit, explicabo dicta laborum?
        </p>
        <p>© 2024 Crepe Food Truck. Tous droits réservés.</p>
      </footer>
    </Container>
  );
}

export default Footer;
