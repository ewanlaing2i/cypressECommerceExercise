class loginPage{

    elements = {
        usernameTextbox : () => cy.get('#username'),
        passwordTextbox : () => cy.get('#password'),
        loginButton : () => cy.contains('Log in')
    }

    login(email, password){
        this.elements.usernameTextbox().type(email);
        this.elements.passwordTextbox().type(password);
        this.elements.loginButton().click();
    }

}

module.exports = new loginPage();

