import { useContext } from 'react'
import { CounterContext } from '../data/CounterContext'

const Counter = () => {
	const count = useContext(CounterContext)

	return (
		<div>
			Värdet som finns i context är: {count.value} <br/>
			<button> Öka värdet </button>
		</div>
	)
}

export default Counter;
