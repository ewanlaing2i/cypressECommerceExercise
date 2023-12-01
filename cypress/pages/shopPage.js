class shopPage{

    elements = {
        buyBeanieButton : () => cy.get("[aria-label*='Beanie']"),
    }

    addBeanieToCart(){
        this.elements.buyBeanieButton().click();
    }

}

module.exports = new shopPage();