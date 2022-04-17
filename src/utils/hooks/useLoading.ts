import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState } from '../../state/global';

export const useLoading = (loading: boolean) => {
	const [, setLoading] = useRecoilState(loadingState);
	useEffect(() => setLoading(loading), [loading, setLoading]);

	const startLoading = useCallback(() => {
		setLoading(true);
	}, [setLoading]);

	const stopLoading = useCallback(() => {
		setLoading(false);
	}, [setLoading]);

	return [loading, startLoading, stopLoading];
};
