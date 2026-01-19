import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";

const TitleH1 = ({ children, ...props }) => {
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
    });
  }, []);

  return (
    <h1 ref={titleRef} className="titleh1" {...props}>
      {children}
    </h1>
  );
};

TitleH1.displayName = "TitleH1";

export default TitleH1;
