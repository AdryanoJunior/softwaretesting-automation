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
        }
        return selectors
    }

    seeProductCatalog() {
        cy.get(this.selectorsList().productCatalogButton).eq(3).click()
        cy.get(this.selectorsList().jacketCatalog).eq(1).click()
    }

    selectJacketAndVariations() {
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
        
    }
    addWatchesToCart() {
        cy.get(this.selectorsList().addWatchesToCart).click()
    }
    accessSweatshirtCatalog() {
        cy.get(this.selectorsList().feminineProducts).click()
        cy.get(this.selectorsList().sweatshirtCatalog).eq(1).click()
    }
    selectSweatshirtAndVariations() {
        cy.get(this.selectorsList().selectSweatshirt).click()
        cy.get(this.selectorsList().selectSweatshirtSize).click()
        cy.get(this.selectorsList().selectSweatshirtColor).click()
       
    }
    addSweatshirtToCartButton() {
        cy.get(this.selectorsList().addSweatshirtToCart).click()
    }
    selectRelatedProduct() {
        cy.get(this.selectorsList().selectRelatedProduct).click()
        cy.get(this.selectorsList().changeSize).click()
        cy.get(this.selectorsList().changeColor).click()
        
    }
    addRelatedProductToCart() {
        cy.get(this.selectorsList().addToCartProductTwo).click()
    }
}

export default CatalogPage