import userData from '../fixtures/userData.json'

beforeEach(() => {
  cy.visit('/customer/account/login')
});

describe('Magento Software Testing', () => {

  

  it('Login - Success', () => {
    cy.login()
    cy.get('body').should('contain', 'Welcome, Test Cases!')
  })

  it('Login Fail - Invalid Credentials', () => {
    cy.loginFail()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - With Incorrect Password', () => {
    cy.get("[title='Email']").type(userData.userSuccess.username)
    cy.get("[title='Password']").type(userData.userFail.password)
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - With Incorrect Email', () => {
    cy.get("[title='Email']").type(userData.userFail.username)
    cy.get("[title='Password']").type(userData.userSuccess.password)
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - Without Filling in the Password', () => {
     cy.get("[title='Email']").type(userData.userSuccess.username)
     cy.get("[name='send']").eq(0).click()
     cy.get('body').should('contain', 'This is a required field.')
  });

  it('Login Fail - Without Filling in the Email', () => {
    cy.get("[title='Password']").type(userData.userSuccess.password)
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'This is a required field.')
  });

  it('Login Fail - Without Filling in Mandatory Fields', () => {
    cy.get("[name='send']").eq(0).click()
    cy.get('.message-error > div')
  });

  it('Login Fail - Email in Invalid Format', () => {
    cy.get("[title='Email']").type('testingtestcases.com')
    cy.get("[title='Password']").type(userData.userSuccess.password)
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  });
})