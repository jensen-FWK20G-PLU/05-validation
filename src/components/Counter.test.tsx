import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import { CounterContext } from '../data/CounterContext'
import { Count } from '../models/count'

describe('Counter component', () => {

	// Smoke test
	it('renders without crashing', () => {
		render( <Counter /> )
	})

	it('displays the value 1337 by default', () => {
		render( <Counter /> )
		const element = screen.getByText(/1337/)
		expect(element).toBeInTheDocument();
	})
	
	it('displays the value stored in the context', () => {
		const context: Count = {
			value: 123
		}

		render(
			<CounterContext.Provider value={context}>
				<Counter />
			</CounterContext.Provider>
		)

		const element = screen.getByText(/123/)
		expect(element).toBeInTheDocument()
	})


	// can increase value by 1 when button click
})