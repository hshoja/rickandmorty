import { useQuery } from '@apollo/client';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { CHARACTERS_PER_PAGE } from '../../components/Character/CharacterPagination';
import { CharacterCardType } from '../../interfaces/character';
import { characterPageState } from '../../state/character';
import { useLoading } from '../../utils/hooks';
import { GET_CHARACTERS, GET_CHARACTERS_BY_NAME } from '../queries';

type API_RESPONSE = {
	characters: {
		info: {
			count: number;
		};
		results: CharacterCardType[];
	};
};

export const useCharacters = () => {
	let [searchParams] = useSearchParams();
	const search = searchParams.toString().replace('=', '');
	const isSearch = search.length > 0;

	const { pageNumber } = useParams();
	const page = pageNumber ? parseInt(pageNumber) : 1;
	const setPageCount = useSetRecoilState(characterPageState);

	const query = isSearch ? GET_CHARACTERS_BY_NAME : GET_CHARACTERS;
	const variables = isSearch
		? {
				page,
				filter: { name: search },
		  }
		: { page };

	const { loading, error, data } = useQuery<API_RESPONSE, { page: number }>(query, {
		variables,
		onCompleted: () => {
			if (data?.characters) setPageCount(Math.ceil(data.characters.info.count / CHARACTERS_PER_PAGE));
			else setPageCount(1);
		},
	});

	useLoading(loading);

	return { error, data };
};
