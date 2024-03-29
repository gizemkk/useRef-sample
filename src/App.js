import "./App.css";
import React, { useRef, useEffect } from "react";
import ReducerComponent from './ReducerComponent'
import People from './People'

function App() {
  const inputRef = useRef();
  const divRef = useRef();
  const data = useRef(985)
  console.log('data-> ',data)

  const onFocusBtn = () => {
    inputRef.current.focus();
  };
  const onDivBorderBtn = () => {
    divRef.current.style.border = "2px red solid";
  };
  const onViewInputValueBtn = () => {
    alert(inputRef.current.value);
  };
  useEffect(() => {
    console.log("inputRef=> ", inputRef);
    console.log("inputRef.current=> ", inputRef.current);
    console.log("divRef=> ", divRef);
    console.log("divRef.current=> ", divRef.current);
  });

  return (
    <div ref={divRef} className="App">
      <h1>Welcome</h1>
      <input ref={inputRef} placeholder="Enter a text..." />
      <button onClick={onFocusBtn}>Focus on button</button>
      <button onClick={onDivBorderBtn}>Div border button</button>
      <button onClick={onViewInputValueBtn}>View input value</button>
      <hr/>
      <ReducerComponent />
      <hr/>
      <People />
    </div>
  );
}

export default App;
