import React from 'react';
import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {};

export const Pagination = (props: Props) => {
	return (
		<Stack spacing={2}>
			<MUIPagination count={10} variant="outlined" shape="rounded" color="primary" />
		</Stack>
	);
};

export default Pagination;
