import React from "react";
import PianoRollCard from "./PianoRollCard";
import styles from "./pianoRollGrid.module.scss";

const PianoRollGrid = ({ pianoRollsData }) => {
  return (
    <div className={styles.piano_roll_grid}>
      {pianoRollsData.map((pianoRollData, index) => (
        <PianoRollCard
          key={index}
          pianoRollData={pianoRollData}
          index={index}
        />
      ))}
    </div>
  );
};

export default PianoRollGrid;
