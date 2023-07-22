import Login from '@/pages/login'
import { Provider } from 'react-redux'
import store from '@/redux/store'

// Testing Contact Form
describe('Login Component Form Submission', () => {
	it('should mount Login Component and submit login form', () => {
		cy.mount(<Provider store={ store }><Login /></Provider>)
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