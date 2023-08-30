import { FC } from "react";

import styles from "./HexagonBackground.module.css";
import { useInView } from "react-intersection-observer";
import HexSVG from "../../../public/hexagon.svg";
import HexShadowSVG from "../../../public/hexigonShadow.svg";
import hexShadowPNG from "../../../public/Polygon 4.png";
import Image from "next/image";

interface HexagonProps {
  randomNumber: number;
}

const Hexagon: FC<HexagonProps> = ({ randomNumber }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    // delay: randomNumber * 500,
    triggerOnce: true,
  });

  let isTopper = "";
  let hasShadow = "";
  let color = "green";

  if (randomNumber % 2) {
    color = "red";
  }

  if (randomNumber === 1) {
    isTopper = styles.hexTopper;
    hasShadow = styles.hexShadow;
    color = "rgb(116, 116, 116)";
  } else if (randomNumber === 2) {
    color = "rgb(69, 69, 69)";
  } else if (randomNumber === 3) {
    color = "rgb(37, 37, 37)";
  }

  return (
    <div
      ref={ref}
      // className={styles.accelerated}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        style={{
          position: "relative",
          top: inView ? "0px" : "2000px",
          transition: "top 1s ease-in-out",
        }}
      >
        <span className={isTopper} style={{ position: "absolute" }}>
          <div className={styles.hex} style={{ backgroundColor: color }}></div>
          {/* <HexShadowSVG className={styles.hex} color={color} /> */}
        </span>
        <span className={hasShadow}>
          <div className={styles.hex} style={{ backgroundColor: color }}></div>
          {/* <HexSVG className={styles.hex} color={color} /> */}
          {/* <HexShadowSVG className={styles.hex} color={color} /> */}
          {/* <Image src={hexShadowPNG} alt="yeet" width={100} height={100} /> */}
        </span>
      </div>
    </div>
  );
};

export default Hexagon;
