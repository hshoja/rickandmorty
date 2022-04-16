import { Box } from '@mui/material';
import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { LIST } from '../../data/fake';
import { CharacterCardType } from '../../interfaces/character';
import Pagination from '../Pagination/Pagination';
import CharacterCard from './CharacterCard';

type Props = {};

export const CharacterList = (props: Props) => {
	let [searchParams] = useSearchParams();
	const results: CharacterCardType[] = LIST.characters.results;
	const search = searchParams.toString().replace('=', '');
	const filteredResults = search
		? results.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
		: results;
	return (
		<Box marginTop={4}>
			<Box display="flex" flexDirection={'row'} flexWrap="wrap" alignItems={'start'} justifyContent="start">
				<Box display={'flex'} gap={2} padding={2} flexWrap={'wrap'} justifyContent={'center'}>
					{filteredResults.map(character => (
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
