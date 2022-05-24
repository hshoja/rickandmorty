/// <reference types="cypress" />
import { CYPRESS_MOCKS } from '../../src/mocks/character';

describe('test search functionality', () => {
	const URL = Cypress.env('api_url');

	beforeEach(() => {
		cy.intercept('POST', URL, req => {
			if (req.body.operationName === 'characters') {
				req.reply({
					statusCode: 200,
					body: {
						data: CYPRESS_MOCKS.resultsTrainMock,
					},
				});
			}
		}).as('characters');

		cy.visit('/');
	});

	it('should navigate to search page when type and press enter', () => {
		const searchKey = 'rick';
		const searchInput = cy.get('#search-input');
		searchInput.type(`${searchKey}{enter}`);
		cy.url().should('include', `/search?${searchKey}`);
	});

	it('should see 3 items when search', () => {
		const searchKey = 'train';
		const searchInput = cy.get('#search-input');
		searchInput.type(`${searchKey}{enter}`);

		cy.wait('@characters').then(() => {
			cy.get('.character').should('have.length', 3);
		});
	});

	it('should see not found when there is no items when search', () => {
		cy.intercept('POST', URL, req => {
			if (req.body.operationName === 'characters') {
				req.reply({
					statusCode: 200,
					body: {
						data: {
							characters: null,
						},
					},
				});
			}
		}).as('characters');

		const searchKey = 'train not found';
		const searchInput = cy.get('#search-input');
		searchInput.type(`${searchKey}{enter}`);

		cy.wait('@characters').then(() => {
			cy.get('.character').should('have.length', 0);
		});
	});
});
