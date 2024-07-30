import navbar from "../pages/navbar";

class shopPage{

    // You will noticed on each page the navbar is always there. I would use composition to handle this.
    // composition == 'has a' relationship.
    // You can have the shop page have a navigation bar.

    //like so...
    constructor() {
        //When we create a new shop page, the shop page will also create its own nav bar as part of this
        //page object.
        this.navbar = new navbar();
    }


    //You can have elements with built in filters. This is a good way to make a element locator reusable
    //so you dont bloat out your page objects.
    items = {
        item : (itemName) => {//logic here which gets the item by name},
        addItemToCart : (itemName) => {
                this.elements.item(itemName).click()
                //Here you can do stuff with the nav bar in your pages.
                navbar.basket.itemCount.contains(1);
            }
    }

}
}

export default new shopPage();