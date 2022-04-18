import { Box } from '@mui/material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { LastSeenCharacter } from '../../interfaces/character';
import { lastSeenCharactersState } from '../../state/character';
import { CharacterItem } from '../Character';

export const Footer = () => {
	const results = useRecoilValue(lastSeenCharactersState);
	return (
		<Box
			display={'flex'}
			flexWrap={'wrap'}
			gap={2}
			component="footer"
			padding={2}
			bgcolor={'lightblue'}
			role="footer"
		>
			{results.map(({ id, name }: LastSeenCharacter) => (
				<CharacterItem name={name} id={id} key={id} />
			))}
		</Box>
	);
};

export default Footer;
