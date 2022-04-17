import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import Footer from './Footer';

export const Layout = () => {
	return (
		<Box>
			<SearchBar />
			<Box paddingY={4}>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
