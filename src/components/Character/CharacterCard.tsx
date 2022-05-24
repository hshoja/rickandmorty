import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { CharacterCardType, Status } from '../../interfaces/character';
import { convertToSlug } from '../../utils/utils';
import { Link } from '../shared';
import CharacterStatus from './CharacterStatus';

export const CharacterCard = ({ id, name, image, status }: CharacterCardType) => {
	return (
		<Card sx={{ minWidth: 250 }} className="character">
			<CardMedia component="img" height="140" image={image} alt={name} />
			<CardContent>
				<Box display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}>
					<Link to={`/profile/${id}-${convertToSlug(name)}`}>
						<Typography gutterBottom variant="h6" component="div">
							{name}
						</Typography>
					</Link>
					<CharacterStatus status={status as Status} />
				</Box>
			</CardContent>
		</Card>
	);
};

export default CharacterCard;
