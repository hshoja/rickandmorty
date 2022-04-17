import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { GET_CHARACTERS, GET_CHARACTERS_BY_NAME } from '../../graphql/queries';
import { CharacterCardType } from '../../interfaces/character';
import { useLoading } from '../../utils/hooks';
import Pagination from '../Pagination/Pagination';
import CharacterCard from './CharacterCard';

type API_RESPONSE = {
	characters: {
		results: CharacterCardType[]
	}
}

export const CharacterList = () => {
	let [searchParams] = useSearchParams();
	const search = searchParams.toString().replace('=', '');
	const isSearch = search.length > 0;
	const query = isSearch ? GET_CHARACTERS_BY_NAME : GET_CHARACTERS;
	const variables = isSearch ? {
		page: 1, filter: { name: search }
	} : { page: 1 };

	const { loading, error, data } = useQuery<API_RESPONSE, { page: number }>(query, { variables })

	useLoading(loading)

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
				<Pagination />
			</Box>
		</Box>
	);
};

export default CharacterList;
