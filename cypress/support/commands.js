Cypress.Commands.add('login', (email, password) => {
    cy.visit('/customer/account/login')
    cy.get("[title='Email']").type('cristianoronaldo@gmail.com')
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
})

Cypress.Commands.add('loginFail', (email, password) => {
    cy.visit('/customer/account/login')
    cy.get("[title='Email']").type('wrongcredentials@gmail.com')
    cy.get("[title='Password']").type('test123$')
    cy.get("[name='send']").eq(0).click()
})