class myAccountPage{

// I would update this page object to contain the login page object as you can only find login stuff here.
// You can take the same approach as the navbar page object (splitting up the page with different objects)


    // I like to add page element and function here, if the element changes the function doesnt need changing.
    // Its also nicer to keep things organised.
    login = {
        usernameEmailField : () => cy.get('#username'),
        passwordField : () => cy.get('#password'),
        rememberMeCheckbox : () => cy.get(),
        loginButton : () => cy.contains('Log in'),
        lostPasswordLink : () => cy.get(),

        //page functions
        enterUserLoginDetails : (email, password) => {
            this.usernameEmailField.type(email),
            this.passwordField.type(password)
        }
    }




}

module.exports = new myAccountPage();