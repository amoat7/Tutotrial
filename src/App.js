import React, { Component } from 'react'
import './App.css'
import ParentComp from './Components/ParentComp'
import PortalDemo from './Components/PortalDemo'
import RefsDemo from './Components/RefsDemo'



class App extends Component {
  render() {
    return (
      <div className="App">
       
       <PortalDemo></PortalDemo>
        
      </div>
    )
  }
}

export default App
