import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'David'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getderivedstatefromprops')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentdidmount')
    }
    

    render() {
        console.log('lifecycleA render')
        return (
            
            <div>
               <div>LifecycleA</div> 
               <LifecycleB></LifecycleB>

            </div>
           
        )
    }
}

export default LifecycleA
