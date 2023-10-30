import React, { useEffect, useRef } from "react";
import styles from "./pianoRollCard.module.scss";
import PianoRoll from "../utils/pianoroll";

const PianoRollCard = ({ pianoRollData, index }) => {
  const svgElement = useRef();

  useEffect(() => {
    const svg = svgElement.current;
    const pianoRoll = new PianoRoll(svg, pianoRollData);
  }, []);

  // Starting user visible index from 0 is odd
  const userVisibleIndex = index + 1;

  return (
    <div className={styles.piano_roll_card}>
      <div className={styles.piano_roll_card__description}>
        This is a piano roll number {userVisibleIndex}
      </div>
      <svg ref={svgElement} className={styles.piano_roll_crad__svg}></svg>
    </div>
  );
};

export default PianoRollCard;
