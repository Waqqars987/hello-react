import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Heading from '../components/Heading';
import Button from '../components/Button';

class Superheroes extends Component {
	state = {
		heroes: [
			{ id: uuidv4(), name: 'Batman' },
			{ id: uuidv4(), name: 'Superman' },
			{ id: uuidv4(), name: 'Wonder Woman' },
		],
	};

	onAddHandler = name => {
		const newHero = { id: uuidv4(), name: name };
		this.setState(prevState => {
			return { heroes: [newHero, ...prevState.heroes] };
		});
	};

	onDeleteHandler = id => {
		this.setState(prevState => {
			const updatedHeroes = prevState.heroes.filter(hero => hero.id !== id);
			return { heroes: updatedHeroes };
		});
	};

	render() {
		return (
			<>
				<Heading>Justice League</Heading>

				<ul>
					{this.state.heroes.map((hero, index) => {
						return (
							<li key={hero.id}>
								{hero.name} <Button onClick={() => this.onDeleteHandler(hero.id)}>-</Button>
							</li>
						);
					})}
				</ul>

				<section>
					<Button onClick={() => this.onAddHandler('The Flash')}>Add Flash to Top</Button>&nbsp;
					<Button onClick={() => this.onAddHandler('Green Lantern')}>
						Add Green Lantern to Top
					</Button>
				</section>
			</>
		);
	}
}

export default Superheroes;
