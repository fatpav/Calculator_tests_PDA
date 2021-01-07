// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display result of arithmetical operations', () => {
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number9').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '13')
  })

  it('should chain mulitple operations', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator_subtract').click()
    cy.get('#number4').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should ouput a positive', () => {
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '10')
  })

  it('should be able to ouput a negative', () => {
    cy.get('#number2').click()
    cy.get('#operator_subtract').click()
    cy.get('#number7').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '-5')
  })

  it('should be able to ouput a decimal', () => {
    cy.get('#number8').click()
    cy.get('#operator_divide').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '1.6')
  })

  it('should ouput a large number', () => {
    for (let i = 0; i < 22; i++) {
      cy.get('#number6').click()
    }
    cy.get('.display').should('contain', '6.666666666666666e+21')
  })

  it('should display infinite when divided by zero', () => {
    cy.get('#number9').click()
    cy.get('#operator_divide').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', 'Infinity')
  })

})
