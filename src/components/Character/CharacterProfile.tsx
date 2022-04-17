import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { GET_CHARACTER_BY_IDS } from '../../graphql/queries';
import { Character } from '../../interfaces/character';
import { lastSeenCharactersState } from '../../state/character';
import { useLoading } from '../../utils/hooks';

type API_RESPONSE = {
	charactersByIds: Character[];
};

export const CharacterProfile = () => {
	const setLastSeenCharacters = useSetRecoilState(lastSeenCharactersState);
	const { characterId } = useParams();
	const { loading, error, data } = useQuery<API_RESPONSE>(GET_CHARACTER_BY_IDS, {
		variables: { ids: [characterId] },
		onCompleted: data => {
			setLastSeenCharacters(data.charactersByIds[0]);
		},
	});

	useLoading(loading);

	const character = data?.charactersByIds[0];
	if (error) return <>`Error! ${error.message}`</>;
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
