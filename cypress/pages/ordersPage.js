class ordersPage{

    elements = {
        latestOrderNumber : () => cy.get(':nth-child(1) > .woocommerce-orders-table__cell-order-number > a')
    }

    getLatestOrderNumber(){;
        return(this.elements.latestOrderNumber());
    }


}

module.exports = new ordersPage();