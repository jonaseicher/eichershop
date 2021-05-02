// https://docs.cypress.io/api/introduction/api.html

describe('Control Panel Tests (Isolated)', () => {
  it("control-panel opens in connected state", () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-connected"]');
    cy.get('[data-cy="eichershop-redirect-active"]').should("be.visible");
    cy.get('[data-cy="eichershop-redirect-active"]').click();
    cy.get('[data-cy="eichershop-redirect-active"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-inactive"]').should("be.visible");
  });

  it("disconnects on icon click", () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-connected"]').click();
    cy.get('[data-cy="eichershop-disconnected"]').should("be.visible");
    cy.get('[data-cy="eichershop-connected"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("not.exist");
  });

  it('shows call icon on kafka ringing event', () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="kafka-send-ringing"]').click();
    cy.get('[data-cy="eichershop-in-call"]').should("exist").should("be.visible");
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);
  });

  it('shows multiple ringing events', () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="websockets-wc-message"]').should("not.exist");
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="kafka-send-ringing"]').click();
    // cy.wait(1500);
    cy.get('[data-cy="eichershop-in-call"]').should("exist").should("be.visible");
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);
    cy.get('[data-cy="kafka-send-ringing"]').click();
    // cy.wait(1500);
    cy.get('[data-cy="websockets-wc-message"]').should("have.length", 2);
  });

  it('removes call icon on kafka finished event', () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="kafka-send-ringing"]').click();
    // cy.wait(1500);
    cy.get('[data-cy="eichershop-in-call"]').should("exist").should("be.visible");
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);
    cy.get('[data-cy="kafka-send-finished"]').click();
    // cy.wait(1500);
    cy.get('[data-cy="websockets-wc-message"]').should("have.length", 2);
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
  });

  it("removes cti & redirect icons on kafka disconnected event", () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("exist");
    cy.get('[data-cy="eichershop-connected"]').should("exist");
    cy.get('[data-cy="eichershop-disconnected"]').should("not.exist");

    cy.get('[data-cy="eichershop-connected"]').click();
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("not.exist");
    cy.get('[data-cy="eichershop-connected"]').should("not.exist");
    cy.get('[data-cy="eichershop-disconnected"]').should("exist");
    cy.wait(3000);
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);
  });

  it("connects - thus adds cti & redirect icon on kafka connected event", () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-connected"]').click();
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("not.exist");
    cy.get('[data-cy="eichershop-connected"]').should("not.exist");
    cy.get('[data-cy="eichershop-disconnected"]').should("exist");
    cy.wait(3000);
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);

    cy.get('[data-cy="eichershop-disconnected"]').click();
    cy.get('[data-cy="eichershop-in-call"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("exist");
    cy.get('[data-cy="eichershop-connected"]').should("exist");
    cy.get('[data-cy="eichershop-disconnected"]').should("not.exist");
    cy.wait(3000);
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 2);
  });

  it("changes icons on kafka forwardingbehaviorchange event", () => {
    cy.visit("/scs/eichershop/demo.html");
    cy.get('[data-cy="eichershop-redirect-inactive"]').should("not.exist");

    cy.get('[data-cy="eichershop-redirect-active"]').click();
    cy.get('[data-cy="eichershop-connected"]').should("exist");
    cy.get('[data-cy="eichershop-redirect-inactive"]').should("exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("not.exist");
    // cy.wait(1500);
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 1);

    cy.get('[data-cy="eichershop-redirect-inactive"]').click();
    cy.get('[data-cy="eichershop-connected"]').should("exist");
    cy.get('[data-cy="eichershop-redirect-inactive"]').should("not.exist");
    cy.get('[data-cy="eichershop-redirect-active"]').should("exist");
    // cy.wait(1500);
    cy.get('[data-cy="websockets-wc-message"]').should("exist").should("have.length", 2);
  });

  // it("wip1", () => {
  //   cy.visit("/scs/eichershop/demo.html");
  //   cy.get('[data-cy="emit-ringing-button"]').click();

  //   cy.get('[data-cy="eichershop-disconnected"]').click();
  //   cy.get('[data-cy="eichershop-connected"]').should("be.visible");
  //   cy.get('[data-cy="emit-ringing-button"]').click();
  //   // cy.wait(1500);
  // });

  // it('wip2', () => {
  //   cy.visit('/scs/eichershop/demo.html');
  //   cy.get('[data-cy=testdata]').click();
  //   cy.contains('eichershop-control-panel');
  // });

  // it('wip3', () => {
  //   cy.visit('/scs/eichershop/demo.html');
  //   cy.contains('[data-cy=testdata]', "Send Testdata");
  //   // cy.contains('eichershop-control-panel');
  // });
});

// describe('Navigation Tests', () => {
//   beforeEach(() => {
//     cy.server();
//     cy.setAppSSOData();
//     cy.route('api/customer/*').as('getCustomer');
//     cy.route('api/customer/*/accounts').as('getAccounts');
//   });

//   it('Redirect to Product works', () => {
//     cy.visit(`/customer/${Cypress.env('testCustomer')}/products`);
//     cy.wait(['@getCustomer']);
//     cy.url().should('contain', 'product');
//   });

//   it('Navbar navigation works', () => {
//     cy.visit(`/customer/${Cypress.env('testCustomer')}`);
//     cy.wait(['@getCustomer']);
//     cy.get('[data-cy=eichershop-disconnected]').click({ force: true });
//     cy.get('#link-to-finanzen').click();
//     cy.url().should('match', /\/customer\/.*\/billing/);
//     cy.get('#link-to-produkte').click();
//     cy.contains('h4', 'Mobile Postpaid Service');
//     cy.url().should('match', /\/customer\/.*\/product/);
//     cy.get('#link-to-kunde').click();
//     cy.contains('strong', 'Name');
//     cy.url().should('match', /\/customer\/.*\/customerdetails/);
//   });
// });
