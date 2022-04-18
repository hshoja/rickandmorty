import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useCharacters } from '../../graphql/hooks/useCharacters';
import CharacterCard from './CharacterCard';
import CharacterPagination from './CharacterPagination';

export const CharacterList = () => {
	const { error, data } = useCharacters();

	if (error) return <>`Error! ${error.message}`</>;
	if (!data?.characters) return <>'No results found'</>;

	const results = data.characters.results;
	return (
		<Box marginTop={4}>
			<Helmet>
				<title>Rick and Morty Characters</title>
			</Helmet>
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
