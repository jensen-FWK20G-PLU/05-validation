import React from 'react';
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter'
import { CounterContext } from './data/CounterContext'
import { Count } from './models/count'
import CounterStored from './components/CounterStored'

function App() {
	const context: Count = {
		value: 9001
	}

	return (
		<div className="App">
			<Form />

			<CounterContext.Provider value={context}>
				<Counter />
			</CounterContext.Provider>

			<CounterStored />
		</div>
	);
}

export default App;
