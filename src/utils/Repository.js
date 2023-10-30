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
  }
};

const preparePianoRollCard = (rollId) => {
  const title = `This is a piano roll number ${rollId}`;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
};

export const generateSVGs = async (data) => {
  for (let it = 0; it < 20; it++) {
    const start = it * 60;
    const end = start + 60;
    const partData = data.slice(start, end);

    const { cardDiv, svg } = this.preparePianoRollCard(it);

    pianoRollContainer.appendChild(cardDiv);
    const roll = new PianoRoll(svg, partData);
  }
};
