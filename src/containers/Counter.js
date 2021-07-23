import React, { Component, Fragment } from 'react';
import Heading from '../components/Heading';
import Value from '../components/Value';
import Button from '../components/Button';

class Counter extends Component {
	state = {
		count: 0,
	};

	onCounterChangeHandler = () => {
		this.setState({ count: this.state.count + 1 });

		// this.setState(prevState => {
		// 	return { count: prevState.count + 1 };
		// });
	};

	onCounterResetHandler = () => {
		this.setState({ count: 0 });

		// this.setState(prevState => {
		// 	return { count: prevState.count + 1 };
		// });
	};

	render() {
		return (
			<Fragment>
				{/* Component using 'children' prop */}
				<Heading>My Counter</Heading>

				{/* Component using named prop */}
				<Value data={this.state.count} />
				<br />

				<section>
					<Button onClick={this.onCounterChangeHandler}>Add</Button>&nbsp;&nbsp;
					<Button onClick={this.onCounterResetHandler}>Reset</Button>
				</section>
			</Fragment>
		);
	}
}

export default Counter;
