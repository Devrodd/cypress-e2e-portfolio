/// <reference types="cypress" />

describe('Interacoes', () => {
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('rodrigodantasje@gmail.com')
    })
})