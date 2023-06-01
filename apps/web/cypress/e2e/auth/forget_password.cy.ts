describe('Forget Password', () => {
  it('Forgeting Password', () => {
    cy.visit(`${Cypress.env('host')}/signin`)
    cy.get('button.forgot-password-button')
      .click()
      .visit(`${Cypress.env('host')}/forgot-password`)
    cy.get('input[name="email"]').type('nyomansunimatesting@gmail.com')
    cy.get('button.action-button').click()
  })
})
