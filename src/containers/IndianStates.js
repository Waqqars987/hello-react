import React, { Component } from 'react';

import Heading from '../components/Heading';

class Dummy extends Component {
	componentDidMount() {
		console.log(777, '<<Child>> componentDidMount called!');
	}

	render() {
		return 'Dummy Content';
	}
}

const searchStates = (states, query) => {
	const regex = new RegExp(query, 'i');
	return states.filter(state => state.name.search(regex) > -1);
};

class IndianStates extends Component {
	state = {
		filteredStates: [],
		searchQuery: '',
	};
	searchBoxRef = React.createRef(); //For HTML Element Reference
	statesRef = React.createRef(); //For API Data

	static getDerivedStateFromProps(props, state) {
		console.log(111, 'getDerivedStateFromProps called!');
		return state;
	}

	componentDidMount() {
		console.log(222, 'componentDidMount called!');
		// Perform Side Effects Here
		// Send HTTP Requests
		fetch('http://localhost:8080/states')
			.then(response => response.json())
			.then(data => {
				this.setState({ filteredStates: data });
				this.statesRef.current = data;
			})
			.catch(err => console.error(err));

		this.searchBoxRef.current.focus();
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(333, 'shouldComponentUpdate called!');
		// Always returns a boolean (By default it returns true)
		// Can perform optimization here (cancel unnecessary updates)
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(444, 'getSnapshotBeforeUpdate called!');
		return { currentTimestamp: new Date().getTime() }; // By default it return 'null'
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(555, 'componentDidUpdate called!');
		console.log('snapshot', snapshot);

		if (prevState.searchQuery !== this.state.searchQuery) {
			this.setState({
				filteredStates: searchStates(this.statesRef.current, this.state.searchQuery),
			});
		}
	}

	onSearchCHangeHandler = event => {
		this.setState({ searchQuery: event.target.value });
	};

	render() {
		return (
			<>
				<Heading>Indian States</Heading>

				<input
					type='search'
					placeholder='Search Indian States'
					value={this.state.searchQuery}
					onChange={this.onSearchCHangeHandler}
					ref={this.searchBoxRef}
				/>

				<ul>
					{this.state.filteredStates.map(state => (
						<li key={state.code}>{state.name}</li>
					))}
				</ul>

				<Dummy />
			</>
		);
	}

	componentWillUnmount() {
		console.log(666, 'componentWillUnmount called!');
	}
}

export default IndianStates;
