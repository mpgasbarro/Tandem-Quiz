import React, { Component } from 'react';
import './Home.css';
import { Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '' };
	}
	// Updates the name of the User input Box
	handleChange = (event) => {
		this.setState({ username: event.target.value });
	};

	render() {
		return (
			<main>
				<div>
					<form>
						<label htmlFor='Username'> Username: </label>
						<input
							type='text'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</form>
					<div className='Allboxes'>
						<div className='boxOne'>
							<b> Name: </b> {this.state.username} <br />
							<b> From: </b> Boston, MA <br />
							<b> Interests: </b>Long walks on the beach, Golden Girls <br />
						</div>
						<div className='boxTwo'>
							<b> Name: </b> {this.state.username} <br />
							<b> From: </b> Dallas, TX <br />
							<b> Interests: </b>Opera, Dank Memes <br />
						</div>
						<div className='boxThree'>
							<b> Name: </b> {this.state.username} <br />
							<b> From: </b> Long Beach, CA <br />
							<b> Interests: </b>Shredding the Gnar, playing with yoyo's <br />
						</div>
							<Link to='/quiz'>
								<div className='boxFour'>
									<b> Name: </b> {this.state.username} <br />
									<b> From: </b> Chicago, IL <br />
									<b> Interests: </b>Pokemon, More Pokemon, Daisies <br />
								</div>
							</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Home;
