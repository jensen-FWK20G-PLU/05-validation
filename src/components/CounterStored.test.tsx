import { render, screen } from '@testing-library/react'
import CounterStored from './CounterStored'
// import { setData } from '../data/storage'
// jest.mock('../data/__mocks__/storage')


describe('CounterStored component', () => {
	jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem')
	Object.setPrototypeOf(window.localStorage.getItem, jest.fn( () => '7654' ))

	it('renders without crashing', () => {
		render( <CounterStored /> )
	})
	
	it('renders 404 initially', () => {
		localStorage.clear()
		render( <CounterStored /> )
		const element = screen.getByText(/404/)
		expect(element).toBeInTheDocument()
	})
	
	it('render the value from localStorage', () => {
		const value = '7654'
		localStorage.setItem('counter', value)

		// let x = jest.spyOn(localStorage, 'getItem')
		// console.log(x)
		// x.mockImplementation(() => value)

		render( <CounterStored /> )
		const element = screen.getByText(/7654/)
		expect(element).toBeInTheDocument()
	})
})