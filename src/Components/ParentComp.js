import React, { Component, PureComponent } from 'react'
import MemoCompo from './MemoCompo'
import PureCompo from './PureCompo'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'David'
            })
        }, 2000)
    }
    
    render() {
        console.log('*************Parent Component render************')
        return (
            <div>
                Parent Component
                <MemoCompo name={this.state.name}></MemoCompo>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureCompo name={this.state.name}></PureCompo> */}
            </div>
        )
    }
}

export default ParentComp
