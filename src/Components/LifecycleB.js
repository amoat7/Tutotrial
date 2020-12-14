import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }

        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getderivedstatefromprops')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentdidmount')
    }
    

    render() {
        console.log('LifecycleB render')
        return (
            
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
