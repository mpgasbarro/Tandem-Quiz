import React, { Component } from 'react';


class Quiz extends Component {
    render() {
        return <div>
            {this.props.location.state.username}
            </div>;
    }
}

export default Quiz;