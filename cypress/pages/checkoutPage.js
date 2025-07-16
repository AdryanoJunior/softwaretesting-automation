import { faker } from '@faker-js/faker';

class CheckoutPage {
    selectorsList() {
        const selectors = {
              showCart: ".showcart",
              proceedToCheckoutButton: "[title='Proceed to Checkout']",
               firstNameCheckout: "[name='firstname']",
               lastNameCheckout: "[name='lastname']",
               companyField: "[name='company']",
               streetAddressField: "[name='street[0]']",
               cityField: "[name='city']",
               postcodeField: "[name='postcode']",
               countryField: "[name='country_id']",
               regionField: "[name='region_id']",
               telephoneField: "[name='telephone']",
               shippingMethod: "[checked='true']",
               continueOrder: "[data-role='opc-continue']",
               placeOrder: "[title='Place Order']",

        }
        return selectors
    }
    accessCart() {
        cy.get(this.selectorsList().showCart).click()
        cy.get(this.selectorsList().proceedToCheckoutButton).click()
    }
    enterPersonalData() {
        cy.get(this.selectorsList().firstNameCheckout).clear().type('Test')
        cy.get(this.selectorsList().lastNameCheckout).clear().type('Cases')
        cy.get(this.selectorsList().companyField).type(faker.company.name())
        cy.get(this.selectorsList().streetAddressField).type(faker.location.streetAddress())
        cy.get(this.selectorsList().cityField).type(faker.location.city())
        cy.get(this.selectorsList().postcodeField).type(faker.location.zipCode())
        cy.get(this.selectorsList().countryField).select('Canada')
        cy.get(this.selectorsList().regionField).select('Ontario')
        cy.get(this.selectorsList().telephoneField).type(faker.phone.number({ style: 'national' }))
        cy.get(this.selectorsList().shippingMethod).click()
        
    }
    placeOrder() {
        cy.get(this.selectorsList().continueOrder).click()
        cy.get(this.selectorsList().placeOrder).click()
    }
}

export default CheckoutPage