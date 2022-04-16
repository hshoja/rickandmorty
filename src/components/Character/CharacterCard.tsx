import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterCardType, Status } from '../../interfaces/character';
import CharacterStatus from './CharacterStatus';



export const CharacterCard = ({ id, name, image, status }: CharacterCardType) => {
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
