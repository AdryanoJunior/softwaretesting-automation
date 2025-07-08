import { faker } from '@faker-js/faker'

beforeEach(() => {
  cy.visit('/customer/account/login')
});

describe('Magento Software Testing', () => {

  it('Login - Success', () => {
    cy.get("[title='Email']").type('cristianoronaldo@gmail.com')
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'Welcome, Test Cases!')
  })

  it('Login Fail - Invalid Credentials', () => {
    cy.get("[title='Email']").type('wrongcredentials@gmail.com')
    cy.get("[title='Password']").type('test123$')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - With Incorrect Password', () => {
    cy.get("[title='Email']").type('cristianoronaldo@gmail.com')
    cy.get("[title='Password']").type('wrongpassword')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - With Incorrect Email', () => {
    cy.get("[title='Email']").type('wrongemail@gmail.com')
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  });

  it('Login Fail - Without Filling in the Password', () => {
     cy.get("[title='Email']").type('cristianoronaldo@gmail.com')
     cy.get("[name='send']").eq(0).click()
     cy.get('body').should('contain', 'A login and a password are required.')
  });

  it('Login Fail - Without Filling in the Email', () => {
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'A login and a password are required.')
  });

  it('Login Fail - Without Filling in Mandatory Fields', () => {
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'A login and a password are required.')
  });

  it('Login Fail - Email in Invalid Format', () => {
    cy.get("[title='Email']").type('testingtestcases.com')
    cy.get("[title='Password']").type('test12345$')
    cy.get("[name='send']").eq(0).click()
    cy.get('body').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  });
})