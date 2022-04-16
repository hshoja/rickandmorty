export type LastSeenCharacter = {
  id: string,
  name: string,
}

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
  type: string;
  location: {
    name: string;
  };
};

export type CharacterCardType = Pick<Character, 'id' | 'name' | 'image' | 'status'>;
