import RegisterPage from '../pages/registerPage'
import CatalogPage from '../pages/catalogPage';
import CheckoutPage from '../pages/checkoutPage';
import ReviewPage from '../pages/reviewPage';

const registerPage = new RegisterPage()
const catalogPage = new CatalogPage()
const checkoutPage = new CheckoutPage()
const reviewPage = new ReviewPage()

describe('Magento Software Testing - Main flows of a real user in the system', () => {

  it('Main System Test Cases', () => {

   registerPage.accessRegisterPage()

   registerPage.userRegistration()
   cy.location('pathname').should('equal', '/customer/account/')
   cy.get('body').should('contain', 'Welcome')
   cy.get('body').should('contain', 'Thank you for registering with Main Website Store.')

   catalogPage.seeProductCatalog()

   catalogPage.selectJacketAndVariations()

   cy.get('body').should('contain', 'You added Lando Gym Jacket to your shopping cart.')

   catalogPage.continueShopping()

   catalogPage.selectClock()
   catalogPage.addWatchesToCart()
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
    
    catalogPage.accessSweatshirtCatalog()
    catalogPage.selectSweatshirtAndVariations()

    catalogPage.addSweatshirtToCartButton()
    cy.get('body').should('contain', 'You added Circe Hooded Ice Fleece to your shopping cart.')

    catalogPage.selectRelatedProduct()
    catalogPage.addRelatedProductToCart()
    cy.get('body').should('contain', 'You added Juliana Short-Sleeve Tee to your shopping cart.')
    
    checkoutPage.showCart()
    cy.get('body').should('contain', '$110.00')

    checkoutPage.removeProductOneFromCart()
    cy.get('body').should('contain', '$68.00')

    checkoutPage.removeProductTwoFromCart()
    
    cy.get('body').should('contain', 'You have no items in your shopping cart.')

  });

  it('Search for the product using the search bar and leave a review', () => {

    cy.login()

    reviewPage.searchTheProduct()
    cy.get('body').should('contain', 'Search results for:')

    reviewPage.selectBagToBeReviewed()
    cy.get('body').should('contain', 'Customer Reviews')
    
    reviewPage.insertReviewInformation()
    cy.get('body').should('contain', 'You submitted your review for moderation.')

  });
})