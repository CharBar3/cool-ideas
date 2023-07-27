"use client";

import { FC, useEffect, useState } from "react";
import styles from "../BoxBackground/BoxBackground.module.css";
import Box from "./Box";

interface BoxBackgroundProps {}

const BoxBackground: FC<BoxBackgroundProps> = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }

  const getNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomNumberArray: number[] = [];

  for (let index = 0; index < 150; index++) {
    randomNumberArray.push(getNumber(1, 3));
  }

  const showBoxes = randomNumberArray.map((randomNumber, index) => {
    return <Box key={`${randomNumber}-${index}`} randomNumber={randomNumber} />;
  });

  return <div className={styles.container}>{showBoxes}</div>;
};

export default BoxBackground;
