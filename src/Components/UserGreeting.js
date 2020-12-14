import React, { Component } from 'react'

class UserGreeting extends Component {

    state = {
        isLoggedIn: 52
    }

    render() {

        // let message;

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome David</div>
        // }

        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome David
        //         </div>
        //     )
        // }

        // else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // 

        return(
            this.state.isLoggedIn&&<div>Welcome David</div>
            
        )
    }

   
        
}

export default UserGreeting
