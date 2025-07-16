import { faker } from '@faker-js/faker';

class RegisterPage {
    selectorsList() {
        const selectors = {
             customerAccountButton: "[href='https://magento.softwaretestingboard.com/customer/account/create/']",
             firstNameField: "[title='First Name']",
             lastNameField: "[title='Last Name']" ,
             emailField: "[title='Email']",
             passwordField: "[title='Password']",
             confirmPasswordField: "[title='Confirm Password']",
             createAccountButton: "[title='Create an Account']", 
        }
        return selectors
    }

    accessRegisterPage() {
        cy.visit('/#google_vignette')
        cy.get(this.selectorsList().customerAccountButton).eq(0).click()
    }
    userRegistration() {
        cy.get(this.selectorsList().firstNameField).type(faker.person.firstName('male'))
        cy.get(this.selectorsList().lastNameField).type(faker.person.lastName('male'))
        cy.get(this.selectorsList().emailField).type(faker.internet.email())
        cy.get(this.selectorsList().passwordField).type('test12345$')
        cy.get(this.selectorsList().confirmPasswordField).type('test12345$')
        cy.get(this.selectorsList().createAccountButton).click()
    }

    }


export default RegisterPage