import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

type Props = {
	page: number;
	count: number;
	onChange: (e: React.ChangeEvent<unknown>, value: number) => void;
};

export const Pagination: React.VFC<Props> = ({ page, count, onChange }) => {
	return (
		<Stack spacing={2}>
			<MUIPagination
				page={page}
				count={count}
				variant="outlined"
				shape="rounded"
				color="primary"
				onChange={onChange}
			/>
		</Stack>
	);
};

export default Pagination;
