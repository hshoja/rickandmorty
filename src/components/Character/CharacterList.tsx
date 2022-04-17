import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import React from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { GET_CHARACTERS, GET_CHARACTERS_BY_NAME } from '../../graphql/queries';
import { CharacterCardType } from '../../interfaces/character';
import { characterPageState } from '../../state/character';
import { useLoading } from '../../utils/hooks';
import CharacterCard from './CharacterCard';
import CharacterPagination, { CHARACTERS_PER_PAGE } from './CharacterPagination';

type API_RESPONSE = {
	characters: {
		info: {
			count: number;
		};
		results: CharacterCardType[];
	};
};

export const CharacterList = () => {
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

	if (error) return <>`Error! ${error.message}`</>;
	if (!data?.characters) return <>'No results found'</>;

	const results = data.characters.results;
	return (
		<Box marginTop={4}>
			<Box display="flex" flexDirection={'row'} flexWrap="wrap" alignItems={'start'} justifyContent="start">
				<Box display={'flex'} gap={2} padding={2} flexWrap={'wrap'} justifyContent={'center'}>
					{results.map(character => (
						<CharacterCard {...character} key={character.id} />
					))}
				</Box>
				<Box minWidth={200} bgcolor={'green'}>
					<Outlet />
				</Box>
			</Box>
			<Box display={'flex'} justifyContent={'center'} paddingY={2}>
				<CharacterPagination />
			</Box>
		</Box>
	);
};

export default CharacterList;
