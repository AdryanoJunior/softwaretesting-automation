class CatalogPage {
    selectorsList() {
        const selectors = {
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
        }
        return selectors
    }

    seeProductCatalog() {
        cy.get(this.selectorsList().productCatalogButton).eq(3).click()
        cy.get(this.selectorsList().jacketCatalog).eq(1).click()
    }

    selectProductAndVariations() {
        cy.get(this.selectorsList().selectJacket).click()
        cy.get(this.selectorsList().selectSize).click()
        cy.get(this.selectorsList().selectColor).click()
        cy.get(this.selectorsList().selectQuantity).clear().type('2')
        cy.get(this.selectorsList().addToCartButton).click()
    }
    continueShopping() {
        cy.get(this.selectorsList().showCart).click()
        cy.get(this.selectorsList().viewCart).click()
        cy.get(this.selectorsList().updateShoppingCartButton).click()
        cy.get(this.selectorsList().continueShoppingButton).click()
        cy.get(this.selectorsList().watchCatalog).eq(2).click()
    }
    selectClock() {
        cy.get(this.selectorsList().selectWatch).click({ multiple: true})
        cy.get(this.selectorsList().selectWatchQuantity).clear().type('2')
        cy.get(this.selectorsList().addWatchesToCart).click()
    }
}

export default CatalogPage