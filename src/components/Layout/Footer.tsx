import { Box } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { lastSeenCharacters } from '../../state/character';
import { CharacterItem } from '../Character';

export const Footer = () => {
	const [results] = useRecoilState(lastSeenCharacters);
	return (
		<Box display={'flex'} flexWrap={'wrap'} gap={2} component="footer" padding={2} bgcolor={'lightblue'}>
			{results.map(({ id, name }) => (
				<CharacterItem name={name} id={id} key={id} />
			))}
		</Box>
	);
};

export default Footer;
