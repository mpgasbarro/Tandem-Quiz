import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Modal from "./Components/Modal/Modal"
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: this.props.questions,
			show: false,
			
		};
	}
	// Function that opens/closes Modal
	showModal = () => {
		this.setState({ show: !this.state.show })
	}

	render() {
		return (
			<div>
				<header>
					<Header />
					{/* Input button for Modal */}
					<input
						className='open-modal-btn'
						type='button'
						onClick={this.showModal}
						value=' Show Modal'
					/>

					<Modal show={this.state.show} onClose={this.showModal}>
						This message is from Modal
					</Modal>
				</header>
				<Home />
			</div>
		);
	}
}

export default App;
