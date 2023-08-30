import { FC } from "react";

import styles from "./HexagonBackgroundV2.module.css";
import { useInView } from "react-intersection-observer";

interface HexagonPropsV2 {
  randomNumber: number;
}

const HexagonV2: FC<HexagonPropsV2> = ({ randomNumber }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    // delay: randomNumber * 500,
    triggerOnce: true,
  });

  let color = "";

  if (randomNumber === 1) {
    color = "rgb(116, 116, 116)";
  } else if (randomNumber === 2) {
    color = "rgb(69, 69, 69)";
  } else if (randomNumber === 3) {
    color = "rgb(37, 37, 37)";
  }

  return (
    <div
      ref={ref}
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
        <span>
          <div className={styles.hex} style={{ backgroundColor: color }}></div>
        </span>
      </div>
    </div>
  );
};

export default HexagonV2;
