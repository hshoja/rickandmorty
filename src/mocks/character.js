import { GET_CHARACTER_BY_IDS } from '../graphql/queries';

export const characterMock = [
	{
		request: {
			query: GET_CHARACTER_BY_IDS,
			variables: {
				ids: [1],
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
				ids: [1],
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
				ids: [1],
			},
		},
		result: {
			data: {
				charactersByIds: null,
			},
		},
	},
];

export const MOCKS = { characterMock, characterError, characterNotFoundMock };
