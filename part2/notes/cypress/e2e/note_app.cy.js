describe('Note app', () => {

  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Diego Ramos',
      username: 'diegorramos',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3002/')
  })

  it('front page can be opened', () => {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2022')
  })

  it('login form can be opened', () => {
    cy.contains('login').click()
  })

  it('user can login', () => {
    cy.contains('login').click()
    cy.get('#username').type('diegorramos')
    cy.get('#password').type('test')
    cy.get('#login-button').click()
    cy.contains('Diego Ramos logged in')
  })

  it('login fails with wrong password', () => {
    cy.contains('login').click()
    cy.get('#username').type('diegorramos')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Diego Ramos logged in')
  })

  describe('when logged in', () => {
    beforeEach(() => {
      cy.login({ username: 'diegorramos', password: 'test' })
    })

    it('a new note can be create', () => {
      cy.contains('new note').click()
      cy.get('#newNote').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('and several notes exist', () => {
      beforeEach(() => {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be made important', () => {
        cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })
    })
  })

})
