import React from 'react';
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter'
import { CounterContext } from './data/CounterContext'
import { Count } from './models/count'

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
		</div>
	);
}

export default App;
