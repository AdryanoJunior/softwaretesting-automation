Cypress.Commands.add('login', (email, password) => {
    cy.visit('/customer/account')
    cy.get("[title='Email']").type('cristianoronaldo@gmail.com')
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
})