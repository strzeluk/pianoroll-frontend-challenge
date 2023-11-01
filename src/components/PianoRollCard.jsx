import React, { useEffect, useRef } from "react";
import styles from "./pianoRollCard.module.scss";
import PianoRoll from "../utils/pianoroll";

const PianoRollCard = ({ pianoRollData, index }) => {
  const svgElement = useRef();

  useEffect(() => {
    const svg = svgElement.current;
    let pianoRoll = new PianoRoll(svg, pianoRollData);
    return () => {
      svg.innerHTML = "";
    };
  }, [pianoRollData]);

  return (
    <div className={styles.piano_roll_card}>
      <div className={styles.piano_roll_card__description}>
        This is a piano roll number {index}
      </div>
      <svg ref={svgElement} className={styles.piano_roll_crad__svg}></svg>
    </div>
  );
};

export default PianoRollCard;
