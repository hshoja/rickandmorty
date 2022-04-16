import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import CharacterStatus from './CharacterStatus';

export enum Status {
	ALIVE = 'Alive',
	DEAD = 'Dead',
	UNKNOWN = 'unknown',
}

export type CharacterType = {
	id: string;
	name: string;
	image: string;
	status: string;
};

export const CharacterCard = ({ id, name, image, status }: CharacterType) => {
	return (
		<Card sx={{ minWidth: 250 }}>
			<CardMedia component="img" height="140" image={image} alt={name} />
			<CardContent>
				<Link to={`/profile/${id}`}>
					<Box display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}>
						<Typography gutterBottom variant="h6" component="div">
							{name}
						</Typography>
						<CharacterStatus status={status as Status} />
					</Box>
				</Link>
			</CardContent>
		</Card>
	);
};

export default CharacterCard;
