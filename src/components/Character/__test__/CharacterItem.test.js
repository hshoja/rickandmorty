import { render, screen } from '@testing-library/react';
import CharacterItem from '../CharacterItem';
import { BrowserRouter } from 'react-router-dom';

describe('Character Item', () => {
	it('should find character name in dom', () => {
		const props = { id: 1, name: 'summer smith' };
		render(
			<BrowserRouter>
				<CharacterItem {...props} />
			</BrowserRouter>
		);
		const link = screen.getByRole('link', { name: /summer smith/i });
		expect(link).toBeInTheDocument();
	});
});
