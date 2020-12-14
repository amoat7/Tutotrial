import React, { Component } from 'react'

class Message extends Component {
    state = { 
        message: 'Welcome visitor'
     }

    changeMessage=()=>{
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }
    render() { 
        return ( 
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>this.changeMessage()}>
                    Click me
                </button>
            </div>
            
         );
    }
}
 
export default Message;