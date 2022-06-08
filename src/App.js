import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, COUNTER_DECREMENT, COUNTER_INCREMENT, DIVIDE, MULTIPLY, SUBTRACT, TAKE } from './action.type';
import { useState } from 'react';

function App() {

  const dispatch =useDispatch();

  const state=useSelector((state)=>state);

  const [query, setQuery] = useState("");

  // console.log(query,typeof query)
  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{state.count}</h2>

     <button onClick={()=> dispatch({type:COUNTER_INCREMENT })}>Increment</button>
     <button onClick={()=> dispatch({type:COUNTER_DECREMENT})}>Decrement</button>
     <br/>
     <input type="text" value={state.query} onChange={(e)=> dispatch({type:TAKE, payload:e.target.value})} placeholder='value'/>
    <br/>
    <div style={{border: "1px  red", display: "grid", gridTemplateColumns:"100px 100px", gap:"20px", width:"30%", margin: "auto"}}>
      <button onClick={()=> dispatch({type: ADD})}>add</button>
      <button onClick={()=> dispatch({type: MULTIPLY})}>multiply</button>
      <button onClick={()=> dispatch({type:SUBTRACT})}>subtract</button>
      <button onClick={()=> dispatch({type:DIVIDE})}>divide</button>
    </div>

    </div>
  );
}

export default App;
