class navbar{

    //Here is a nice breakdown of the different areas on the page. Easier to find stuff etc. Reads better in the function chain.
    title = {
        main : () => cy.get(),
        sub : () => cy.get(),
    }

    links = {
        home : () => cy.get(),
        shop : () => cy.get(),
        cart : () => cy.get(),
        checkout : () => cy.get(),
        myAccount : () => cy.get(),
        blog : () => cy.get()
    }

    basket = {
        total : () => cy.get(),
        itemCount : () => cy.get(),
        basketIcon : () => cy.get()
    }

    search = {
        searchBox : () => cy.get(),   
    }

    // I would remove this as you can interact with this via navbar.links.shop.click().
    // This has some minor duplication as your just referencing an element you have saved above.
    // After time you will find you have a PO just full of these functions which click an item. Its gets out of hand really quick.
    // I would have a function which you can pass in elements to action a click in a standardized way, you might want some minor assertions before you click
    // This could be stored within a custom Cypress function or a Util function in another class.
    goToShopPage(){;
        this.elements.shopLink().click();
    }



}

export default new navbar();