
describe('Login', () => {

    it('Login com sucesso', () => {
        
        cy.visit('/')
            //get() - selecionar elementos
            .get('.header-logo')

            // contains() - encontrar elementos por textos

        cy.get('#top_header').as('cabecalho')
            .contains('Login')

            // find() - encontra elementos

        cy.get('cabecalho')
            .find('.fa-user')

           //as() - alias 

           cy.get('cabecalho')
           .find('.fa-user')
    })
})