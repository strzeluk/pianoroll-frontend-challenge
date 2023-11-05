import React, { useEffect, useRef, useState } from "react";
import styles from "./pianoRollCard.module.scss";
import PianoRoll from "../utils/pianoroll";

const PianoRollCard = ({ pianoRollData, index, isMain }) => {
  const [selection, setSelection] = useState(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const marginCompensation = 10;

  const selectionLogging = () => {
    const start =
      "Selection start: " + Math.round(selection.x - marginCompensation) + "px";
    const end =
      "Selection end: " +
      Math.round(selection.x - marginCompensation + selection.width) +
      "px";

    console.log(start + " " + end);
  };

  const handleMouseDown = (event) => {
    selection ?? setSelection(null);
    setStartX(event.clientX);
    setSelection({ x: event.clientX, width: 0 });
    setIsDragging(true);
  };

  const handleTouchStart = (event) => {
    selection ?? setSelection(null);
    setStartX(event.touches[0].clientX);
    setSelection({ x: event.touches[0].clientX, width: 0 });
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      if (selection === null) {
        setSelection({ x: startX, width: width });
      }

      const width = event.clientX - startX;
      setSelection({ x: startX, width: width });
    }
  };

  const handleTouchMove = (event) => {
    if (isDragging && event.touches.length === 1) {
      if (selection === null) {
        setSelection({ x: startX, width: 0 });
      }
      const width = event.touches[0].clientX - startX;
      setSelection({ x: startX, width: width });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    selectionLogging();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    selectionLogging();
  };

  const svgElement = useRef();

  useEffect(() => {
    const svg = svgElement.current;
    let pianoRoll = new PianoRoll(svg, pianoRollData);
    window.scrollTo(0, 0);
    return () => {
      svg.innerHTML = "";
      setSelection(null);
    };
  }, [pianoRollData]);

  return (
    <div className={styles.piano_roll_card}>
      <div
        className={styles.piano_roll_svg_wrapper}
        {...(isMain && {
          onMouseDown: handleMouseDown,
          onTouchStart: handleTouchStart,
          onMouseMove: handleMouseMove,
          onTouchMove: handleTouchMove,
          onMouseUp: handleMouseUp,
          onTouchEnd: handleTouchEnd,
        })}
      >
        <svg ref={svgElement} className={styles.piano_roll_crad__svg}></svg>
        {selection && isMain && (
          <div
            className={styles.piano_roll_card__selection}
            style={{
              left: selection.x - marginCompensation + "px",
              width: selection.width + "px",
            }}
          ></div>
        )}
      </div>
      <div
        className={
          isMain
            ? styles.piano_roll_card__title
            : styles.piano_roll_card__description
        }
      >
        Piano roll number {index}
      </div>
    </div>
  );
};

export default PianoRollCard;
