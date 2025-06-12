
describe('Get elements', () => {

    it('Obter elementos', () => {
        
        cy.visit('/')
            //get() - selecionar elementos
            .get('.header-logo')

            // contains() - encontrar elementos por textos

        cy.get('#top_header').as('cabecalho')
            .contains('Login')

            // find() - encontra elementos
            // geralmente diminuimos o escopo com um get()
        cy.get('@cabecalho')
            .find('.fa-user')

           //as() - alias 
            //serve para criar apelidos (atalhos ) para grandes comandos
           cy.get('@cabecalho')
            .find('.fa-user')
    })
})