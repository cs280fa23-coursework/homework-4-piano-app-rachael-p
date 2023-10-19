import "./style.css";

function createMapping(): PianoMap {
  return {
    C: {
      note: { type: "natural", pitch: "C" },
      soundFile: "sounds/piano_C.mp3",
    },
    CSharp: {
      note: { type: "sharp", pitch: "C" },
      soundFile: "sounds/piano_CSharp.mp3",
    },
    D: {
      note: { type: "natural", pitch: "D" },
      soundFile: "sounds/piano_D.mp3",
    },
    DSharp: {
      note: { type: "sharp", pitch: "D" },
      soundFile: "sounds/piano_DSharp.mp3",
    },
    E: {
      note: { type: "natural", pitch: "E" },
      soundFile: "sounds/piano_E.mp3",
    },
    F: {
      note: { type: "natural", pitch: "F" },
      soundFile: "sounds/piano_F.mp3",
    },
    FSharp: {
      note: { type: "sharp", pitch: "F" },
      soundFile: "sounds/piano_FSharp.mp3",
    },
    G: {
      note: { type: "natural", pitch: "G" },
      soundFile: "sounds/piano_G.mp3",
    },
    GSharp: {
      note: { type: "sharp", pitch: "G" },
      soundFile: "sounds/piano_GSharp.mp3",
    },
    A: {
      note: { type: "natural", pitch: "A" },
      soundFile: "sounds/piano_A.mp3",
    },
    ASharp: {
      note: { type: "sharp", pitch: "A" },
      soundFile: "sounds/piano_ASharp.mp3",
    },
    B: {
      note: { type: "natural", pitch: "B" },
      soundFile: "sounds/piano_B.mp3",
    },
  };
}

function extractKey(element: HTMLElement): PianoKey {
  if (element.id.slice(2) === "") {
    return element.id as PianoKey;
  }
  return (element.id.slice(0, 1) + "Sharp") as PianoKey;
}

function playSound(myPianoMap: PianoMap, event: Event): void {
  let key: PianoKey = extractKey(event.target as HTMLElement);
  let info: KeyVal = myPianoMap[key];
  let file: HTMLAudioElement = new Audio(`${info.soundFile}`);
  file.addEventListener("error", (event) => {
    alert(
      "Sorry, an error occurred while trying to play the sound. Please try again later.",
    );
    console.log(Object.getPrototypeOf(event).target);
  });
  file.play();
}

document.addEventListener("DOMContentLoaded", () => {
  let myPianoMap: PianoMap = createMapping();
  const notes: NodeList = document.querySelectorAll(
    ".natural-key , .accidental-key",
  );
  for (let k: number = 0; k < notes.length; k++) {
    notes[k].addEventListener("click", playSound.bind(this, myPianoMap));
  }
});
