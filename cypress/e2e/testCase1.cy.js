
import navbar from "../pages/navbar";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import shopPage from "../pages/shopPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import orderConfirmationPage from "../pages/orderConfirmationPage";
import myaccountPage from "../pages/myAccountPage";
import ordersPage from "../pages/ordersPage";
import myAccountPage from "../pages/myAccountPage";

describe('template spec', () => {


  beforeEach('Log in and add Beanie to cart', () => {
    cy.fixture("validUserData").as('userData');
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/my-account/');
    cy.get('@userData').then(data => {

    //because we made this only enter user details, we can reuse it for negative testing of invalid creds.
      myAccountPage.login.enterUserLoginDetails(data.email, data.password);
      myAccountPage.login.loginButton.click();
      //loginPage.login(data.email, data.password);
    })


    navbar.goToShopPage();

    shopPage.addBeanieToCart();
    //Im not sure if this works as is, my VSCode isnt setup for JS. But this is how it looks.
    // Your on the shop page and have access to the navbar.
    // This approach is really good when you have a big page made up of lots of different areas and
    // want to split it up into different page objects. This can be really powerful when multiple pages
    // use the thing on each page. Just create a single page object and use composition to pull it in.
    shopPage.navbar.basket.itemCount.contains(1);

    navbar.goToCartPage();
  })

  afterEach('Log out', () => {
    navbar.goToAccountPage();
    myaccountPage.logout();
  })


  it('reduces item cost by 15% when a coupon code is applied', () => {
    cy.fixture("couponCodes").as('couponData');



    cy.get('@couponData').then(codes => {
      cartPage.getItemValue().then((itemValueElement) => {
        const initialValue = Number(itemValueElement.text().replace('.', '').replace('£', ''));
        cartPage.applyCoupon(codes.validCode);
        cartPage.getItemValue().then((discountItemValueElement) => {
          const discountedValue = Number(discountItemValueElement.text().replace('.', '').replace('£', ''));
          expect(discountedValue - 395).to.deep.equal(0.85 * (initialValue - 395));
        })
      })
    })
    cartPage.removeItems;
  })


  it('Stores an order number', () => {
    cartPage.checkout();
    cy.fixture("validUserData").as('userData').then(data => {
      checkoutPage.placeOrder(data.firstName, data.lastName, data.city, data.postCode, data.phoneNumber, data.email);
    })
    orderConfirmationPage.getOrderNumber().then((orderNumberElement) => {
      const orderNo = orderNumberElement.text();
      navbar.goToAccountPage();
      myaccountPage.goToOrdersPage();
      ordersPage.getLatestOrderNumber().then((orderNumberElement) => {
        const orderNumberCheck = orderNumberElement.text().replace('#', '');
        cy.log(orderNumberCheck).then(() => {
          expect(orderNumberCheck).to.include(orderNo);  
        });
      })
    })
  })
});