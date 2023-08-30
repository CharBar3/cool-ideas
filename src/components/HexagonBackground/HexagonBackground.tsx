"use client";
import { FC, useEffect, useState } from "react";
import styles from "./HexagonBackground.module.css";

import Hexagon from "./Hexagon";

interface HexagonBackgroundProps {}

const HexagonBackground: FC<HexagonBackgroundProps> = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return;
  // }

  const getNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomNumberArray: number[] = [];

  for (let index = 0; index < 250; index++) {
    randomNumberArray.push(getNumber(1, 3));
  }

  const show = randomNumberArray.map((randomNumber, index) => {
    return <Hexagon key={index} randomNumber={randomNumber} />;
  });

  return (
    <div className={styles.main}>
      <div className={styles.container}>{show}</div>
    </div>
  );
};

export default HexagonBackground;
