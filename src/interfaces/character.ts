export enum Status {
	ALIVE = 'Alive',
	DEAD = 'Dead',
	UNKNOWN = 'unknown',
}

export type Character = {
	id: string;
	name: string;
	image: string;
	status: string;
	gender: string;
	species: string;
	type: Status;
	location: {
		name: string;
	};
};

export type CharacterCardType = Pick<Character, 'id' | 'name' | 'image' | 'status'>;

export type LastSeenCharacter = Pick<Character, 'id' | 'name'>;
