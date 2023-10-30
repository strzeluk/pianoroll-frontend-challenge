import React, { useEffect } from "react";
import styles from "./pianoRollCard.module.scss";
import PianoRoll from "../utils/pianoroll";

const PianoRollCard = ({ pianoRollData, index }) => {
  useEffect(() => {
    const svg = document.getElementById(`index-${index}`);
    const pianoRoll = new PianoRoll(svg, pianoRollData);
  }, []);

  return (
    <div className={styles.piano_roll_card}>
      <div className={styles.piano_roll_card__description}>
        This is a piano roll number {index}
      </div>
      <svg id={`index-${index}`} className={styles.piano_roll_crad__svg}></svg>
    </div>
  );
};

export default PianoRollCard;
