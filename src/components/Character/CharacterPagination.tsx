import React, { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { characterPageState } from '../../state/character';
import { Pagination } from '../shared';

export const CHARACTERS_PER_PAGE = 20;

export const CharacterPagination: React.VFC = () => {
	const count = useRecoilValue(characterPageState);
	const location = useLocation();
	const { pageNumber } = useParams();
	const navigate = useNavigate();
	const page = pageNumber ? parseInt(pageNumber) : 1;

	const handleChange = useCallback(
		(e: React.ChangeEvent<unknown>, value: number) => {
			const hasLocationPageRoute = location.pathname.includes('page');
			if (hasLocationPageRoute) {
				navigate(location.pathname.replace(/page\/\d+/, `page/${value}`) + location.search);
				return;
			}

			const isLocationRoot = location.pathname === '/';
			const rootPathname = isLocationRoot ? '' : location.pathname;
			navigate(`${rootPathname}/page/${value}` + location.search);
		},
		[location.pathname, location.search, navigate]
	);

	return <Pagination count={count} page={page} onChange={handleChange} />;
};

export default CharacterPagination;
