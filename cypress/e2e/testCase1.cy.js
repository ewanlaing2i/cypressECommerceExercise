
describe('template spec', () => {

  beforeEach('Log in and add Beanie to cart', () => {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/my-account/');
    cy.get('#username').type('Ewan.Laing@2itesting.com');
    cy.get('#password').type('2passiwordtesting');
    cy.contains('Log in').click();
    cy.get('.storefront-primary-navigation').contains('Shop').click();
    cy.get('.post-27 > .button').click();
    cy.get('.cart-contents').click();

  })

  afterEach('Log out', () => {
    cy.contains('My account').click();
    cy.contains('Logout').click();


  })


  it('reduces item cost by 15% when a coupon code is applied', () => {
    cy.get('strong > .woocommerce-Price-amount > bdi').then((price) => {
      const initialValue = Number(price.text().replace('.', '').replace('£', ''));
      cy.log(initialValue);
      cy.get('#coupon_code').click().type("edgewords");
      cy.get('.coupon > .button').click();
      cy.get('.cart-discount > th');
      cy.get('strong > .woocommerce-Price-amount > bdi').then((price) => {
        const newValue = Number(price.text().replace('.', '').replace('£', ''));
        expect(newValue - 395).to.deep.equal(0.85 * (initialValue - 395));
      });
    });
    cy.get('.remove').click();
  })


  it('Stores an order number', () => {
    cy.get('.checkout-button').click();
    cy.get('#billing_first_name').clear().type("Ewan");
    cy.get('#billing_last_name').clear().type("Laing");
    cy.get('#billing_city').clear().type("Glasgow");
    cy.get('#billing_postcode').clear().type("G11 6HU");
    cy.get('#billing_phone').clear().type("123455678912");
    cy.get('#billing_email').clear().type("ewan.laing@2itesting.com");
    cy.get('#place_order').click();
    cy.get('.woocommerce-order-overview__order > strong').then((orderNumberElement) => {
      const orderNo = orderNumberElement.text();
      cy.log(orderNo);
      cy.get('#menu-item-46 > a').click();
      cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click();
      cy.get(':nth-child(1) > .woocommerce-orders-table__cell-order-number > a').then((orderNumberElement) => {
        const orderNumberCheck = orderNumberElement.text().replace('#', '');
        cy.log(orderNumberCheck).then(() => {
          expect(orderNumberCheck).to.include(orderNo);  
        });
      })
    })
  })
});