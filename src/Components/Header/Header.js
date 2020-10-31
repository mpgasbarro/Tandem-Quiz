import React, { Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<h1> Who Wants to be a Tandem Millionaire </h1>
				<Link to='/'> Home </Link>
			</div>
		);
	}
}

export default Header;
