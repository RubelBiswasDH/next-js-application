describe('Login Page', () => {
	it('should navigate to the login page', () => {
		cy.visit('http://localhost:3000/login')

		cy.get('h3').contains('Login')
	})
})

// Testing Contact Form
describe('Login Form Submission', () => {
	it('should submit login form', () => {
		cy.visit('http://localhost:3000/login')
		cy.url().should('include', '/login')
		cy.get('h3').contains('Login')

		cy.get('#email').type('rubelgmail.com')
		cy.get('button').contains('Login').click()
		cy.get('.ant-form-item-explain-error').contains('Please enter your Password.')
		cy.get('#password').type('12345678')
		cy.get('.ant-form-item-explain-error').contains('The input is not valid E-mail!')
		cy.get('#email').clear()
		cy.get('#email').type('rubel@gmail.com')
		cy.get('button').contains('Login').click()
		cy.get('span').contains('Successfully Logged In')
	})
})