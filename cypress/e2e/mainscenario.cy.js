import { faker } from '@faker-js/faker';
import RegisterPage from '../pages/registerPage';
import CatalogPage from '../pages/catalogPage';
import CheckoutPage from '../pages/checkoutPage';

const registerPage = new RegisterPage()
const catalogPage = new CatalogPage()
const checkoutPage = new CheckoutPage()

describe('Magento Software Testing', () => {

  const selectorsList = {
  
    feminineProducts: "[href='https://magento.softwaretestingboard.com/women.html']" ,
    sweatshirtCatalog: "[href='https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html']",
    selectSweatshirt: "[src='https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/h/wh12-gray_main_1.jpg']",
    selectSweatshirtSize: "[aria-label='M']",
    selectSweatshirtColor: "[aria-label='Purple']",
    addSweatshirtToCart: "[title='Add to Cart']",
    selectRelatedProduct: "[alt='Juliana Short-Sleeve Tee']",
    changeSize: "[aria-label='XL']",
    changeColor: "[aria-label='Yellow']",
    addToCartProductTwo: "[title='Add to Cart']",
    removeProductFromCart: "[title='Remove item']",
    acceptRemoval: ".action-accept",
    removeProductTwo: "[title='Remove item']",
    confirmRemoval: '.action-primary > span',

    searchBar: "[placeholder='Search entire store here...']",
    searchForProduct: "[title='Search']",
    selectBag: "[alt='Impulse Duffle']",
    addReviewButton: ".add",
    selectFiveStars: "[for='Rating_5']",
    nicknameField: "[name='nickname']",
    summaryField: "#summary_field",
    reviewField: "#review_field",
    submitReviewButton: ".submit" 
 
  }

  it.only('Main System Test Cases', () => {
   registerPage.accessRegisterPage()

   registerPage.userRegistration()
   cy.location('pathname').should('equal', '/customer/account/')
   cy.get('body').should('contain', 'Welcome')
   cy.get('body').should('contain', 'Thank you for registering with Main Website Store.')

   catalogPage.seeProductCatalog()

   catalogPage.selectProductAndVariations()
   cy.get('body').should('contain', 'You added Lando Gym Jacket to your shopping cart.')

   catalogPage.continueShopping()

   catalogPage.selectClock()
   cy.get('body').should('contain', 'You added Luma Analog Watch to your shopping cart.')

   checkoutPage.accessCart()
   checkoutPage.enterPersonalData()
   checkoutPage.placeOrder()

   cy.get('body').should('contain', 'Order Summary')
   cy.get('body').should('contain', 'Payment Method')
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

  it('Search for the product using the search bar and leave a review', () => {
    cy.login()

    cy.get(selectorsList.searchBar).type('Impulse Duffle')
    cy.get(selectorsList.searchForProduct).click()
    cy.get('body').should('contain', 'Search results for:')
    cy.get(selectorsList.selectBag).should('be.visible').click({ multiple: true })
    cy.get(selectorsList.addReviewButton).click()
    cy.get('body').should('contain', 'Customer Reviews')
    cy.get(selectorsList.selectFiveStars).click({force: true})
    cy.get(selectorsList.nicknameField).clear().type('Test Cases')
    cy.get(selectorsList.summaryField).type('My opinion after buying the bag')
    cy.get(selectorsList.reviewField).type('I really liked it, a very pretty bag that catches your eye, has a lot of space and has a very comfortable handle and is made of very good material.')
    cy.get(selectorsList.submitReviewButton).click()
    cy.get('body').should('contain', 'You submitted your review for moderation.')
  });
})