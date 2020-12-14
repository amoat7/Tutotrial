import React, { Component } from 'react'

class EventBind extends Component {

    state ={
        message: 'Hello'
    }

    clickHandler =() =>{
        this.setState({message: 'goodbye'})
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
