import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: this.props.questions,
		};
	}
	render() {
		console.log(this.state.questions);
		return <div className='App'></div>;
	}
}

export default App;
