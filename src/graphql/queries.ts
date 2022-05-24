import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
	query characters($page: Int) {
		characters(page: $page) {
			info {
				count
			}
			results {
				id
				name
				image
				status
			}
		}
	}
`;
export const GET_CHARACTERS_BY_NAME = gql`
	query characters($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
			}
			results {
				id
				name
				image
				status
			}
		}
	}
`;
export const GET_CHARACTER_BY_IDS = gql`
	query charactersByIds($ids: [ID!]!) {
		charactersByIds(ids: $ids) {
			id
			name
			image
			status
			gender
			species
			type
			location {
				name
			}
		}
	}
`;
