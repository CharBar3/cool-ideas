"use client";

import { FC } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../BoxBackground/BoxBackground.module.css";

interface BoxProps {
  randomNumber: number;
}

const Box: FC<BoxProps> = ({ randomNumber }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: randomNumber * 300,
    triggerOnce: true,
  });
  let conditionalStyles = null;

  if (randomNumber === 1) {
    conditionalStyles = styles.light;
  } else if (randomNumber === 2) {
    conditionalStyles = styles.medium;
  } else if (randomNumber === 3) {
    conditionalStyles = styles.dark;
  }

  return (
    <div ref={ref} className={styles.parent}>
      <div
        className={`${conditionalStyles} ${styles.child}`}
        style={inView ? { top: "0px" } : {}}
      ></div>
      {randomNumber === 1 && (
        <div
          className={`${styles.lightTop}`}
          style={inView ? { top: "0px" } : {}}
        ></div>
      )}
    </div>
  );

  // return (
  //   <div ref={ref}>
  //     <div className={styles.box} style={inView ? { top: "0px" } : {}}>
  //       <div className={`${styles.box} ${conditionalStyles}`}></div>
  //
  //     </div>
  //   </div>
  // );
};

export default Box;
