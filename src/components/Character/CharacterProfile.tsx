import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { LIST } from '../../data/fake';

type Character = {
	name: string;
	image: string;
	gender?: string;
	species?: string;
	type?: string;
	location: {
		name: string;
	};
};

export const CharacterProfile = () => {
	const { characterId } = useParams();
	const character: Character = LIST.characters.results.filter(character => character.id === characterId)[0];
	if (!character) return <Box>Character not found.</Box>;

	return (
		<Box display={'flex'} justifyContent={'center'} marginY={5}>
			<Card sx={{ minWidth: 400 }}>
				<CardMedia component="img" height="300" image={character.image} alt={character.name} />
				<CardContent>
					<Box display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}>
						<Typography gutterBottom variant="h6" component="div">
							{character.name}
						</Typography>
					</Box>
					<Box display={'flex'} flexDirection="column" gap={2}>
						<div>
							<b>Species</b> {character.species}
						</div>
						<div>
							<b>Type</b> {character.type}
						</div>
						<div>
							<b>Gender</b> {character.gender}
						</div>
						<div>
							<b>Location name </b>
							{character.location.name}
						</div>
						<Link to="/">Back to the homepage</Link>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default CharacterProfile;
