import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    // Function that closes the Modal Button
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className='backdropStyle'>
				<div className='modalStyle'>
					{this.props.children}
					<div className='footerStyle'>
						<button
							className='close-modal-btn'
							onClick={(e) => {
								this.onClose(e);
							}}>
							Close
						</button>
					</div>
				</div>
			</div>
		);
	}
}
