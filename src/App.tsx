import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharacterList, CharacterProfile } from './components/Character';
import { Layout } from './components/Layout';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<CharacterList />} />
					<Route path="search">
						<Route index element={<CharacterList />} />
						<Route path="page">
							<Route path=":pageNumber" element={<CharacterList />} />
						</Route>
					</Route>
					<Route path="page">
						<Route path=":pageNumber" element={<CharacterList />} />
					</Route>
					<Route path="profile">
						<Route path=":characterId" element={<CharacterProfile />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
