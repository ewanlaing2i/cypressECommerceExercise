class myaccountPage{

    elements = {
        ordersLink : () => cy.get('.woocommerce-MyAccount-navigation-link--orders > a'),
        logoutLink : () => cy.contains('Logout')
    }

    goToOrdersPage(){;
        this.elements.ordersLink().click();
    }

    logout(){
        this.elements.logoutLink().click()
    }


}

module.exports = new myaccountPage();