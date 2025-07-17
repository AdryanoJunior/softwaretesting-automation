class ReviewPage {
    selectorsList() {
        const selectors = {
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
        return selectors
    }

    searchTheProduct() {
        cy.get(this.selectorsList().searchBar).type('Impulse Duffle')
        cy.get(this.selectorsList().searchForProduct).click()
    }
    
    selectBagToBeReviewed() {
        cy.get(this.selectorsList().selectBag).should('be.visible').click({ multiple: true })
        cy.get(this.selectorsList().addReviewButton).click()
    }
  
    insertReviewInformation() {
        cy.get(this.selectorsList().selectFiveStars).click({force: true})
        cy.get(this.selectorsList().nicknameField).clear().type('Test Cases')
        cy.get(this.selectorsList().summaryField).type('My opinion after buying the bag')
        cy.get(this.selectorsList().reviewField).type('I really liked it, a very pretty bag that catches your eye, has a lot of space and has a very comfortable handle and is made of very good material.')
        cy.get(this.selectorsList().submitReviewButton).click()
    }
   
}

export default ReviewPage