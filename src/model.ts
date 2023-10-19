type NoteType = "natural" | "flat" | "sharp";
type NotePitch = "C" | "D" | "E" | "F" | "G" | "A" | "B"; 

interface Note {
    type: NoteType;
    pitch: NotePitch;
}

type PianoKey = "C" | "CSharp" | "D" | "DSharp" | "E" | "F" | "FSharp" | "G" | "GSharp" | "A" | "ASharp" | "B" 

type KeyVal = {
    note: Note;
    soundFile: string;
}

type PianoMap = Record<PianoKey, KeyVal>;
