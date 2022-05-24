import { atom, selector } from 'recoil';
import { LastSeenCharacter } from '../interfaces/character';

const lastSeenCharacters = atom<LastSeenCharacter[]>({
	key: 'lastSeenCharacters',
	default: [],
});

export const lastSeenCharactersState = selector({
	key: 'addLastSeenCharacter',
	get: ({ get }) => get(lastSeenCharacters),
	set: ({ set, get }, { id, name }: any) => {
		const lastNineSeen = get(lastSeenCharacters).filter(c => c.name !== name).slice(0, 9);
		set<LastSeenCharacter[]>(lastSeenCharacters, [{ id, name }, ...lastNineSeen]);
	},
});

export const characterPageState = atom<number>({
	key: 'characterPageState',
	default: 1,
});
