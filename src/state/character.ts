import { atom, selector } from "recoil";
import { LastSeenCharacter } from "../interfaces/character";

const lastSeenCharacters = atom<LastSeenCharacter[]>({
  key: 'LastSeenCharacters',
  default: [],
});

export const lastSeenCharactersState = selector({
  key: 'addLastSeenCharacter',
  get: ({ get }) => get(lastSeenCharacters),
  set: ({ set, get }, newValue: any) => {
    const lastNineSeen = get(lastSeenCharacters).slice(-9);
    set<LastSeenCharacter[]>(lastSeenCharacters, [newValue, ...lastNineSeen]);
  }
})
