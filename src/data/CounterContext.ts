import { createContext } from 'react';
import { Count } from '../models/count';

//const CounterContext = createContext(1337);

const CounterContext = createContext<Count>({
	value: 1337
	//increase: () => {}
})


export { CounterContext }
