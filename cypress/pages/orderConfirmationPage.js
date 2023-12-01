class orderConfirmationPage{

    elements = {
        orderNumber : () => cy.get('.woocommerce-order-overview__order > strong')
    }

    getOrderNumber(){
        return(this.elements.orderNumber());
    }


}

module.exports = new orderConfirmationPage();