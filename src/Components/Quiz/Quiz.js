import React, { Component, Link } from 'react';
import './Quiz.css';

let answerArr = [];
let randomNum = Math.floor(Math.random() * 4);
let correctAns = '';
let allAns = '';
let indexArr = 0;
let clickAns = '';

class Quiz extends Component {
	answerQ = (event) => {
		clickAns = event.target.innerText;
	};

	nextQuestionClick = () => {
		if (clickAns === this.props.questions[indexArr].correct) {
			indexArr++;
			this.forceUpdate();
		}
	};

	render() {
		console.log(this.props.questions[0].correct);
		let questionInfo = this.props.questions.map((question, index) => {
			return <h1 key={index}>{question.question}</h1>;
		});

		let answerInfo = this.props.questions.map((answer, index) => {
			correctAns = answer.correct;
			answerArr = answer.incorrect;
			if (answerArr.length <= 3) {
				answerArr.splice(randomNum, 0, correctAns);
			}
			let allAns = answerArr.map((answers, index) => {
				return (
					<h2 key={index} className='AnswerBox' onClick={this.answerQ}>
						{' '}
						{answers}
					</h2>
				);
			});
			return <h3 key={index}> {allAns}</h3>;
		});

		return (
			<div>
				{this.props.location.state.username}
				<h1> {questionInfo[indexArr]} </h1>
				<h3> {answerInfo[indexArr]} </h3>
				<button onClick={this.nextQuestionClick}> Enter </button>
			</div>
		);
	}
}

export default Quiz;
