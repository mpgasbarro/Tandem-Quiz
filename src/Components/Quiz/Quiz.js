import React, { Component } from 'react';

let answerArr = [];
let randomNum = Math.floor(Math.random() * 4);
let correctAns = '';
let allAns = '';

class Quiz extends Component {
	render() {
		let questionInfo = this.props.questions.map((question, index) => {
			return <li key={index}>{question.question}</li>;
		});

		let answerInfo = this.props.questions.map((answer, index) => {
			correctAns = answer.correct;
			answerArr = answer.incorrect;
			answerArr.splice(randomNum, 0, correctAns);
			let allAns = answerArr.map((answers, index) => {
				return <li> {answers} </li>;
			});
			return <h3 key={index}>{allAns}</h3>;
		});

		return (
			<div>
				{this.props.location.state.username}
				<h1> {questionInfo[1]} </h1>
				<h3> {answerInfo[1]} </h3>
			</div>
		);
	}
}

export default Quiz;
