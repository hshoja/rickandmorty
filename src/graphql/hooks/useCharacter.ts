import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Character } from '../../interfaces/character';
import { lastSeenCharactersState } from '../../state/character';
import { useLoading } from '../../utils/hooks';
import { GET_CHARACTER_BY_IDS } from '../queries';

type API_RESPONSE = {
	charactersByIds: Character[];
};

export const useCharacter = () => {
	const setLastSeenCharacters = useSetRecoilState(lastSeenCharactersState);
	const { characterId } = useParams();
	const id = characterId?.replace(/[^0-9]/g, '');
	const { loading, error, data } = useQuery<API_RESPONSE>(GET_CHARACTER_BY_IDS, {
		variables: { ids: [id] },
		onCompleted: data => {
			if (data?.charactersByIds?.length) {
				setLastSeenCharacters(data.charactersByIds[0]);
			}
		},
	});

	useLoading(loading);
	const character = data?.charactersByIds?.length && data.charactersByIds[0];
	return { error, character };
};
