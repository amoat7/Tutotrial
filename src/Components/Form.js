import React, { Component } from 'react'

class Form extends Component {

    state={
        username: '',
        comments: '',
        topic: 'react'
    }

    handleUsernameChange = (event) =>{

        this.setState({username: event.target.value})

    }

    handleCommentsChange =(event)=>{
        this.setState({comments: event.target.value})
    }

    handleTopicChange =(event)=>{
        this.setState({topic:event.target.value })
    }

    handleSubmit =(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
       const Form_ = 
        <form onSubmit={this.handleSubmit}>

            <div>
                <label htmlFor="">Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>

            <div>
                <label htmlFor="">Comments</label>
                <textarea name="" id="" cols="30" rows="10" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>

            <div>
                <label htmlFor="">Topic</label>
                <select name="" id="" value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>

            <button type="submit">Submit</button>

        </form>
           
        return (
            
            Form_

        )
    }
}

export default Form
