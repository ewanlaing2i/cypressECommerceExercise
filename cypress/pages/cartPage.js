class cartPage{



    elements = {
        currentPrice : () => cy.get('strong > .woocommerce-Price-amount > bdi'),
        couponTextbox : () => cy.get('#coupon_code'),
        couponButton : () => cy.get('.coupon > .button'),
        couponConfirmation : () => cy.get('.cart-discount > th'),
        removeItemsButton: () => cy.get('.remove'),
        checkoutButton: () => cy.get('.checkout-button'),
        couponConfirmation: () => cy.get('.cart-discount > th')
    }

    getItemValue(){
        
        return(this.elements.currentPrice());
        
    }


    applyCoupon(validCode){
      this.elements.couponTextbox().click().type(validCode);
      this.elements.couponButton().click();
      this.elements.couponConfirmation();
    }


    removeItems(){
        this.elements.removeItemsButton().click();
    }

    checkout(){
        this.elements.checkoutButton().click();
    }

}

module.exports = new cartPage();