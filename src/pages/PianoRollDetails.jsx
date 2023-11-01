import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./pianoRollDetails.module.scss";
import PianoRollCard from "../components/PianoRollCard";
import { useEffect, useState } from "react";
import { loadPianoRollsData } from "../utils/Repository";

const PianoRollDetails = () => {
  const { rollId } = useParams();
  const navigate = useNavigate();

  const [ID, setID] = useState(rollId);

  const location = useLocation();
  let pianoRollsData = location.state;

  if (!pianoRollsData) {
    throw new Error("No pianoRollsData provided");
  }

  useEffect(() => {
    setID(rollId);
  }, [rollId]);

  const handleClick = (event) => {
    const id = event.currentTarget.id;
    navigate(`/details/${id}`, { state: pianoRollsData });
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.main_pianoroll}>
        <PianoRollCard pianoRollData={pianoRollsData[ID]} index={ID} />
      </div>
      <div className={styles.side_pianorolls_list}>
        <h2>PianoRoll List</h2>
        {pianoRollsData.map((pianoRollData, index) => (
          <div
            className={styles.side_pianorolls_item}
            id={index}
            onClick={handleClick}
            key={index}
          >
            <PianoRollCard pianoRollData={pianoRollData} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PianoRollDetails;
