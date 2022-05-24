import { findByText, findByRole, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';
import CharacterProfile from '../CharacterProfile';
import { MOCKS } from '../../../mocks/character';
import Footer from '../../Layout/Footer';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		characterId: '1',
	}),
}));

const Wrapper = ({ children }) => (
	<BrowserRouter>
		<RecoilRoot>{children}</RecoilRoot>
	</BrowserRouter>
);

describe('Character Profile', () => {
	it('should render character`s information when call the api', async () => {
		const { container } = render(
			<Wrapper>
				<MockedProvider mocks={MOCKS.characterMock} addTypename={false}>
					<CharacterProfile />
				</MockedProvider>
			</Wrapper>
		);

		expect(await findByText(container, /Rick Sanchez/i)).toBeInTheDocument();
		expect(await findByText(container, /Male/i)).toBeInTheDocument();
		expect(await findByText(container, /Human/i)).toBeInTheDocument();
		expect(await findByText(container, /Citadel of Ricks/i)).toBeInTheDocument();
	});

	it('should show appropriate message when an error occurs', async () => {
		const { container } = render(
			<Wrapper>
				<MockedProvider mocks={MOCKS.characterError} addTypename={false}>
					<CharacterProfile />
				</MockedProvider>
			</Wrapper>
		);

		expect(await findByText(container, /An error occurred/i)).toBeInTheDocument();
	});

	it('should show appropriate message when character is not found', async () => {
		const { container } = render(
			<Wrapper>
				<MockedProvider mocks={MOCKS.characterNotFoundMock} addTypename={false}>
					<CharacterProfile />
				</MockedProvider>
			</Wrapper>
		);

		expect(await findByText(container, /Character not found!/i)).toBeInTheDocument();
	});

	it('should have the last seen character in footer', async () => {
		render(
			<Wrapper>
				<MockedProvider mocks={MOCKS.characterMock} addTypename={false}>
					<CharacterProfile />
				</MockedProvider>
				<Footer />
			</Wrapper>
		);

		const footer = await screen.findByRole('footer');
		expect(await findByRole(footer, 'link', { name: /Rick Sanchez/i })).toBeInTheDocument();
	});
});
