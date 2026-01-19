import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SecondaryTitle = ({ children }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(titleRef.current, {
      type: "lines,words,chars",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.out",
      zIndex: 5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <>
      <h2 ref={titleRef} className="titleh2">
        {children}
      </h2>
    </>
  );
};

SecondaryTitle.propTypes = {};

export default SecondaryTitle;
