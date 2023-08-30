"use client";
import { FC, useEffect, useState } from "react";
import styles from "./HexagonBackgroundV2.module.css";

import HexagonV2 from "./HexagonV2";

interface HexagonBackgroundV2Props {}

const HexagonBackgroundV2: FC<HexagonBackgroundV2Props> = () => {
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

  const showBottom = randomNumberArray.map((randomNumber, index) => {
    return <HexagonV2 key={index} randomNumber={randomNumber} />;
  });

  const showTop = randomNumberArray.map((randomNumber, index) => {
    let passedInNumber = randomNumber;
    if (randomNumber != 1) {
      passedInNumber = 0;
    }
    return <HexagonV2 key={index} randomNumber={passedInNumber} />;
  });

  return (
    <div className={styles.bigContainer}>
      {/* Top Layer */}
      <div className={styles.containerWrapperTop}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.topSheet}>{showTop}</div>
          </div>
        </div>
      </div>
      {/* Bottom Layer */}
      <div className={styles.containerWrapperBottom}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.bottomSheet}>{showBottom}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonBackgroundV2;
