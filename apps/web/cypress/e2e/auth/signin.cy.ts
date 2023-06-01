describe('Signin user', () => {
  beforeEach('Visit signin', () => {
    cy.visit(`${Cypress.env('host')}/signin`)
  })

  it('Signin using email & Password', () => {
    cy.get('input[name="email"]').type('nyomansunimatesting@gmail.com')
    cy.get('input[name="password"]').type('vibesonly15')
    cy.get('button.signin').click()
  })

  it('Signin using Google Account', () => {
    cy.get('button.google').click()
  })

  it('Signin using Github Account', () => {
    cy.get('button.github').click()
  })
})
