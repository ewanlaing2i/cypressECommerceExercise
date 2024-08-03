
import navbar from "../pages/navbar";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import shopPage from "../pages/shopPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import orderConfirmationPage from "../pages/orderConfirmationPage";
import myaccountPage from "../pages/myaccountPage";
import ordersPage from "../pages/ordersPage";


describe('template spec', () => {


  beforeEach('Log in and add Beanie to cart', () => {
    cy.fixture("validUserData").as('userData');
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/my-account/');
    cy.get('@userData').then(data => {
      loginPage.login(data.email, data.password);
    })
    navbar.goToShopPage();
    shopPage.addBeanieToCart();
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
      checkoutPage.placeOrder(data.firstName, data.lastName, data.street, data.city, data.postCode, data.phoneNumber, data.email);
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