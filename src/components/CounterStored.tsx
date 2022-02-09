import { useState, useEffect } from 'react'

const CounterStored = () => {
	const [value, setValue] = useState<number>(getFromLocalStorage())

	// useEffect(() => {}, [])

	return (
		<div>
			Värdet som finns i localStorage är: {value} <br/>
			<button> Öka värdet </button>
		</div>
	)
}

function getFromLocalStorage(): number {
	const COUNTER_KEY = 'counter'
	let value = localStorage.getItem(COUNTER_KEY)
	if( value === null || isNaN(Number(value)) ) {
		value = "" + 404
		localStorage.setItem(COUNTER_KEY, "" + 404)
	}
	return Number(value)
}

export default CounterStored
