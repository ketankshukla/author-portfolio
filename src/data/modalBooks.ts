export type { ModalBook, Chapter } from "./modalBooksReality";
export { realityBooks } from "./modalBooksReality";
export { repetitionBooks } from "./modalBooksRepetition";
export { aztecBooks1 } from "./modalBooksAztec1";
export { aztecBooks2 } from "./modalBooksAztec2";
export { aztecBooks3 } from "./modalBooksAztec3";
export { aztecBooks4 } from "./modalBooksAztec4";

import { aztecBooks1 } from "./modalBooksAztec1";
import { aztecBooks2 } from "./modalBooksAztec2";
import { aztecBooks3 } from "./modalBooksAztec3";
import { aztecBooks4 } from "./modalBooksAztec4";

export const aztecBooks = [
  ...aztecBooks1,
  ...aztecBooks2,
  ...aztecBooks3,
  ...aztecBooks4,
];
