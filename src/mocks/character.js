import { GET_CHARACTER_BY_IDS } from '../graphql/queries';

export const characterMock = [
	{
		request: {
			query: GET_CHARACTER_BY_IDS,
			variables: {
				ids: ['1'],
			},
		},
		result: {
			data: {
				charactersByIds: [
					{
						id: '1',
						name: 'Rick Sanchez',
						image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
						status: 'Alive',
						gender: 'Male',
						species: 'Human',
						type: '',
						location: {
							name: 'Citadel of Ricks',
						},
					},
				],
			},
		},
	},
];

export const characterError = [
	{
		request: {
			query: GET_CHARACTER_BY_IDS,
			variables: {
				ids: ['1'],
			},
		},
		error: new Error('An error occurred'),
	},
];

export const characterNotFoundMock = [
	{
		request: {
			query: GET_CHARACTER_BY_IDS,
			variables: {
				ids: ['1'],
			},
		},
		result: {
			data: {
				charactersByIds: null,
			},
		},
	},
];

export const resultsTrainMock = {
	characters: {
		info: { count: 3, __typename: 'Info' },
		results: [
			{
				id: '632',
				name: 'Train Cop',
				image: 'https://rickandmortyapi.com/api/character/avatar/632.jpeg',
				status: 'Dead',
				__typename: 'Character',
			},
			{
				id: '633',
				name: 'Train Cops',
				image: 'https://rickandmortyapi.com/api/character/avatar/633.jpeg',
				status: 'Alive',
				__typename: 'Character',
			},
			{
				id: '634',
				name: 'Train Cops Instructor',
				image: 'https://rickandmortyapi.com/api/character/avatar/634.jpeg',
				status: 'Dead',
				__typename: 'Character',
			},
		],
		__typename: 'Characters',
	},
};

export const MOCKS = { characterMock, characterError, characterNotFoundMock };
export const CYPRESS_MOCKS = { resultsTrainMock };
