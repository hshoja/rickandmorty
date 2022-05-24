import { Box } from '@mui/material';
import React from 'react';
import { Status } from '../../interfaces/character';

type Props = {
	status: Status;
};

const colors = {
	Alive: 'green',
	Dead: 'red',
	unknown: 'gray',
};

const CharacterStatus = ({ status }: Props) => {
	const badgeColor = colors[status];
	return <Box bgcolor={badgeColor} width={15} height={15} borderRadius={2} />;
};

export default CharacterStatus;
