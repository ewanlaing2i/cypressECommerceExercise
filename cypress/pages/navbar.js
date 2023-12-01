class navbar{

    elements = {
        shopLink : () => cy.get('.storefront-primary-navigation').contains('Shop'),
        cartLink : () => cy.get('.storefront-primary-navigation').contains('Cart'),
        myAccountLink : () => cy.get('.storefront-primary-navigation').contains('My account')
    }

    goToShopPage(){;
        this.elements.shopLink().click();
    }

    goToCartPage(){;
        this.elements.cartLink().click();
    }

    goToAccountPage(){;
        this.elements.myAccountLink().click();
    }

}

module.exports = new navbar();