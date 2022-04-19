import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
	name: 'RickAndMorty',
	version: '1.0'
});

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
