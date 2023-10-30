import { useEffect, useState } from "react";
import PianoRollGrid from "./components/PianoRollGrid";
import Nav from "./components/Nav";
import { loadPianoRollsData } from "./utils/Repository";
import "./app.scss";

function App() {
  const [pianoRollsData, setPianoRollsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadPianoRollsData();
      setPianoRollsData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <PianoRollGrid pianoRollsData={pianoRollsData} />
    </>
  );
}

export default App;
