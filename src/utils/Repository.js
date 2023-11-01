import axios from "axios";

export const loadPianoRollsData = async () => {
  const pianoData = [];
  try {
    const response = await axios.get("https://pianoroll.ai/random_notes");
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    for (let it = 0; it < 20; it++) {
      const start = it * 60;
      const end = start + 60;
      const partData = response.data.slice(start, end);
      pianoData.push(partData);
    }
    return pianoData;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
