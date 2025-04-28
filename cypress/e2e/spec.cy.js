describe('Create and connect to an account', () => {
  it('Visits the Oc commerce site', () => {
    cy.visit('/home')

    // User is able to create an account an to be redirect to login pages

    cy.contains('LOGIN').click()

    cy.url().should('include', '/user/login')

    // User is able to connect with the previously created account
    cy.get('[id^=your_name]').type('fakeuser')
    cy.get('[id^=your_pass]').type('1hstesh<23456789')
    cy.get('form').contains('Log in').click()
    cy.url().should('include', '/home')
    cy.contains('FAVOURITE')
  })
})

