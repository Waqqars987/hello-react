import { useState } from 'react';

import Counter from './containers/Counter';
import Superheroes from './containers/Superheroes';
import IndianStates from './containers/IndianStates';
import Button from './components/Button';
import './App.css';

function App() {
	const [showIndianStates, setShowIndianStates] = useState(true);

	return (
		<div className='App'>
			<h1>Hello, React!</h1>

			<Button onClick={() => setShowIndianStates(prevShowIndianStates => !prevShowIndianStates)}>
				Toggle Indian States
			</Button>

			<hr />

			<Counter />
			<hr />

			<Superheroes />
			<hr />

			{showIndianStates && <IndianStates />}
		</div>
	);
}

export default App;
