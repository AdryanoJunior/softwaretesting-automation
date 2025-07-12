import { faker } from '@faker-js/faker';

describe('Magento Software Testing', () => {

  const selectorsList = {
    customerAccountButton: "[href='https://magento.softwaretestingboard.com/customer/account/create/']",
    firstNameField: "[title='First Name']",
    lastNameField: "[title='Last Name']" ,
    emailField: "[title='Email']",
    passwordField: "[title='Password']",
    confirmPasswordField: "[title='Confirm Password']",
    createAccountButton: "[title='Create an Account']", 
    productCatalogButton: ".ui-menu-icon",
    jacketCatalog: "[href='https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html']",
    selectJacket: "[alt='Lando Gym Jacket']",
    selectSize: "[aria-label='L']",
    selectColor: "[aria-label='Green']",
    selectQuantity: "[title='Qty']",
    addToCartButton: "[title='Add to Cart']",
    showCart: ".showcart",
    viewCart: ".viewcart",
    updateShoppingCartButton: "[title='Update Shopping Cart']",
    continueShoppingButton: "[href='https://magento.softwaretestingboard.com/gear.html']",
    watchCatalog: "[href='https://magento.softwaretestingboard.com/gear/watches.html']",
    selectWatch: "[alt='Luma Analog Watch']",
    selectWatchQuantity: "[title='Qty']",
    addWatchesToCart: "[title='Add to Cart']",
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

    feminineProducts: "[href='https://magento.softwaretestingboard.com/women.html']" ,
    sweatshirtCatalog: "[href='https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html']",
    selectSweatshirt: "[alt='Circe Hooded Ice Fleece']",
    selectSweatshirtSize: "[aria-label='M']",
    selectSweatshirtColor: "[aria-label='Purple']",
    addSweatshirtToCart: "[title='Add to Cart']",
    selectRelatedProduct: "[title='Juliana Short-Sleeve Tee']",
    changeSize: "[aria-label='XL']",
    changeColor: "[aria-label='Yellow']",
    addToCartProductTwo: "[title='Add to Cart']",
    removeProductFromCart: "[title='Remove item']",
    acceptRemoval: ".action-accept",
    removeProductTwo: "[title='Remove item']",
    confirmRemoval: '.action-primary > span',

    searchBar: "[placeholder='Search entire store here...']",
    searchForProduct: "[title='Search']",

 
  }

  it('Main System Test Cases', () => {

    cy.visit('/#google_vignette')
    cy.get(selectorsList.customerAccountButton).eq(0).click()
    cy.get(selectorsList.firstNameField).type(faker.person.firstName('male'))
    cy.get(selectorsList.lastNameField).type(faker.person.lastName('male'))
    cy.get(selectorsList.emailField).type(faker.internet.email())
    cy.get(selectorsList.passwordField).type('test12345$')
    cy.get(selectorsList.confirmPasswordField).type('test12345$')
    cy.get(selectorsList.createAccountButton).click()
    cy.get('body').should('contain', 'Welcome')
    cy.get('body').should('contain', 'Thank you for registering with Main Website Store.')
    cy.get(selectorsList.productCatalogButton).eq(3).click()
    cy.get(selectorsList.jacketCatalog).eq(1).click()
    cy.get(selectorsList.selectJacket).click()
    cy.get(selectorsList.selectSize).click()
    cy.get(selectorsList.selectColor).click()
    cy.get(selectorsList.selectQuantity).clear().type('2')
    cy.get(selectorsList.addToCartButton).click()
    cy.get('body').should('contain', 'You added Lando Gym Jacket to your shopping cart.')
    cy.get(selectorsList.showCart).click()
    cy.get(selectorsList.viewCart).click()
    cy.get(selectorsList.updateShoppingCartButton).click()
    cy.get(selectorsList.continueShoppingButton).click()
    cy.get(selectorsList.watchCatalog).eq(2).click()
    cy.get(selectorsList.selectWatch).click({ multiple: true})
    cy.get(selectorsList.selectWatchQuantity).clear().type('2')
    cy.get(selectorsList.addWatchesToCart).click()
    cy.get('body').should('contain', 'You added Luma Analog Watch to your shopping cart.')
    cy.get(selectorsList.showCart).click()
    cy.get(selectorsList.proceedToCheckoutButton).click()
    cy.get(selectorsList.firstNameCheckout).clear().type('Test')
    cy.get(selectorsList.lastNameCheckout).clear().type('Cases')
    cy.get(selectorsList.companyField).type(faker.company.name())
    cy.get(selectorsList.streetAddressField).type(faker.location.streetAddress())
    cy.get(selectorsList.cityField).type(faker.location.city())
    cy.get(selectorsList.postcodeField).type(faker.location.zipCode())
    cy.get(selectorsList.countryField).select('Canada')
    cy.get(selectorsList.regionField).select('Ontario')
    cy.get(selectorsList.telephoneField).type(faker.phone.number({ style: 'national' }))
    cy.get(selectorsList.shippingMethod).click()
    cy.get(selectorsList.continueOrder).click()
    cy.get('body').should('contain', 'Order Summary')
    cy.get('body').should('contain', 'Payment Method')
    cy.get(selectorsList.placeOrder).click()
    cy.get('body').should('contain', 'Thank you for your purchase!')
    cy.get('body').should('contain', 'Your order number is:')
    
  })
  it('Adding and Removing Product from Cart', () => {

    cy.login()
    
    cy.get(selectorsList.feminineProducts).click()
    cy.get(selectorsList.sweatshirtCatalog).eq(1).click()
    cy.get(selectorsList.selectSweatshirt).click()
    cy.get(selectorsList.selectSweatshirtSize).click()
    cy.get(selectorsList.selectSweatshirtColor).click()
    cy.get(selectorsList.addSweatshirtToCart).click()
    cy.get('body').should('contain', 'You added Circe Hooded Ice Fleece to your shopping cart.')
    cy.get(selectorsList.selectRelatedProduct).click()
    cy.get(selectorsList.changeSize).click()
    cy.get(selectorsList.changeColor).click()
    cy.get(selectorsList.addToCartProductTwo).click()
    cy.get('body').should('contain', 'You added Juliana Short-Sleeve Tee to your shopping cart.')
    cy.get(selectorsList.showCart).click()
    cy.get('body').should('contain', '$110.00')
    cy.get(selectorsList.removeProductFromCart).eq(0).click()
    cy.get(selectorsList.acceptRemoval).click()
    cy.get('body').should('contain', '$68.00')
    cy.get(selectorsList.removeProductTwo).eq(1).click()
    cy.get('body').should('contain', 'Are you sure you would like to remove this item from the shopping cart?')
    cy.get(selectorsList.confirmRemoval).click()
    cy.get('body').should('contain', 'You have no items in your shopping cart.')
  });

  it.only('Search for Product Using the Search Bar', () => {
    cy.login()

    cy.get(selectorsList.searchBar).type('Impulse Duffle')
    cy.get(selectorsList.searchForProduct).click()
    cy.get('body').should('contain', 'Search results for:')
    
  });
})