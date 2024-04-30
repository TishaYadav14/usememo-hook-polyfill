import React, { useMemo, useState } from "react";
import './App.css';
import useCustomMemo from "./Hooks/use-custom-memo";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("expensive calculation rendered!")
    return counter * counter;
  }

  //using useMemo hook
  // const memoizedSquareValue = useMemo(squaredValue,[counter]);
  
  //using useCustomMemo hook
  const memoizedSquareValue = useCustomMemo(squaredValue,[counter]);

  return (
    <div className="App">
      <h2>Counter : {counter}</h2>
      <h2>Squared Counter : {memoizedSquareValue}</h2>
      <button onClick={()=>setCounter(counter + 1)}>Increment</button>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={()=>setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
