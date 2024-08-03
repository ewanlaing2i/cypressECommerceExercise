class checkoutPage{

    elements = {
        firstNameTextbox : () => cy.get('#billing_first_name'),
        lastNameTextbox : () => cy.get('#billing_last_name'),
        addressInput : () => cy.get('#billing_address_1'),
        cityNameTextbox : () => cy.get('#billing_city'),
        postCodeTextbox : () => cy.get('#billing_postcode'),
        phoneNumberTextbox : () => cy.get('#billing_phone'),
        emailTextbox: () => cy.get('#billing_email'),
        placeOrderButton: () => cy.get('#place_order')
    }

    placeOrder(firstName, lastName, street, city, postCode, phoneNumber, emailAddress){
        this.elements.firstNameTextbox().clear().type(firstName);
        this.elements.lastNameTextbox().clear().type(lastName);
        this.elements.addressInput().clear().type(street);
        this.elements.cityNameTextbox().clear().type(city);
        this.elements.postCodeTextbox().clear().type(postCode);
        this.elements.phoneNumberTextbox().clear().type(phoneNumber);
        this.elements.emailTextbox().clear().type(emailAddress);
        this.elements.placeOrderButton().click();
    }

}

module.exports = new checkoutPage();