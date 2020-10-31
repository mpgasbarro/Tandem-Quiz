import React, { Component } from 'react';


class Quiz extends Component {
    render() {
        let questionInfo = this.props.questions.map((question, index) => {
						return (
								<li className='pecList' key={index}>
									{question.question}
								</li>
						);
				});
        console.log(this.props.questions[0].question)
        return (
					<div>
						{this.props.location.state.username}
						<h1> {questionInfo} </h1>
					</div>
				);
    }
}

export default Quiz;