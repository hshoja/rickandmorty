import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	id: string;
	name: string;
};

export const CharacterItem = ({ id, name }: Props) => {
	return (
		<Link to={`/profile/${id}`}>
			<Typography variant="body2" color="text.secondary">
				{name}
			</Typography>
		</Link>
	);
};

export default CharacterItem;
