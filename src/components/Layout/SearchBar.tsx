import SearchIcon from '@mui/icons-material/Search';
import { LinearProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loadingState } from '../../state/global';
import { Link } from '../shared';

type Props = {};

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: '30%',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export const SearchBar = (props: Props) => {
	const [search, setSearch] = React.useState<string>('');
	const navigate = useNavigate();
	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && search !== null && search !== undefined) {
			navigate(`/search?${search}`);
		}
	};

	const loading = useRecoilValue(loadingState);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<Link to="/">
						<Typography variant="h5">Rick and Morty</Typography>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							id="search-input"
							placeholder="Search…"
							value={search}
							onKeyDown={handleEnter}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
				{loading && (
					<Box sx={{ width: '100%' }}>
						<LinearProgress />
					</Box>
				)}
			</AppBar>
		</Box>
	);
};
export default SearchBar;
