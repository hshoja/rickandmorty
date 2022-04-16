import { atom } from "recoil";
import { LastSeenCharacter } from "../interfaces/character";

export const lastSeenCharacters = atom<LastSeenCharacter[]>({
  key: 'LastSeenCharacters',
  default: [],
});
