import { useLoaderData, Link } from "react-router-dom";
import PianoRollCard from "../components/PianoRollCard";
import styles from "./pianoRollGrid.module.scss";
import { loadPianoRollsData } from "../utils/Repository";

const PianoRollGrid = () => {
  const pianoRollsData = useLoaderData();

  return (
    <div className={styles.piano_roll_grid}>
      {pianoRollsData.map((pianoRollData, index) => (
        <Link to={`/details/${index}`} state={pianoRollsData} key={index}>
          <PianoRollCard pianoRollData={pianoRollData} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default PianoRollGrid;

export const loader = async () => {
  const result = await loadPianoRollsData();
  if (result instanceof Error) {
    throw result;
  }
  return result;
};
