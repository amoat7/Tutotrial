import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import ClassClick from './Components/ClassClick'
import Message from './Components/Message'
import FunctionClick from './Components/FunctionClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'


const App =()=> {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      {/* 
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Greet name="Bruce" heroName='batman'>
         <p>This is children props</p>
       </Greet>
       <Greet name="Clark" heroName='Superman'>
         <button>Superman</button>
       </Greet>
       <Greet name="Diana" heroName='wonderwoman'></Greet>
       <Welcome name="Bruce" heroName='batman'></Welcome>
       <Welcome name="Clark" heroName='Superman'></Welcome>
       <Welcome name="Diana" heroName='wonderwoman'></Welcome> */}
       {/* <Counter></Counter>*/}
       {/* 
        <Message></Message>


        */}
    </div>
  );
}

export default App;
