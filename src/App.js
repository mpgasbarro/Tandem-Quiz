import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from "./Components/Home/Home"
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: this.props.questions,
		};
	}
	render() {
		return (
		<div >
      <Home />
			</div>
		);
	}
}

export default App;
