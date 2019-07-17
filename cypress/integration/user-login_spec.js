
describe('User Login Scenarios', function () {
  // valid login creds
  const username = 'imran'
  const password = 'imran'

  context('Valid user login attempts.', function() {
    beforeEach(() => {
      cy.visit('http://localhost:3030');
    });
    
    it('Allows login as admin user', function() {
      cy.get('input[ng-model="username"]').type(username)
      cy.get('input[ng-model="password"]').type(password + '{enter}')

      cy.get('.toast')
        .should('be.visible')
        .and('contain', 'successfully Signed In!')
    })
    
    it('Login as normal user', function() {
      cy.get('input[ng-model="username"]').type('jenny')
      cy.get('input[ng-model="password"]').type('jenny{enter}')

      cy.get('.toast')
        .should('be.visible')
        .and('contain', 'successfully Signed In!')
    })
  })

  context('Invalid user login attempts.', function() {
    beforeEach(() => {
      cy.visit('http://localhost:3030');
    });
    
    it('Does not allow login with invalid creds', function() {
      cy.get('input[ng-model="username"]').type('randomuser')
      cy.get('input[ng-model="password"]').type('password123{enter}')

      cy.get('.toast')
        .should('be.visible')
        .and('contain', 'combination incorrect')
    })
  })

})