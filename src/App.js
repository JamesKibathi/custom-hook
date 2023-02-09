import { useState } from 'react';
import './App.css';

function App() {

  const [display,setDisplay]=useState(false)

  function clicked(){
      console.log("I am clicked")
      setDisplay(true)

  }

  return (
   
    <div className="App">
    
    <button onClick={clicked}>{display? "hidden":"show"}</button>

    <h1>{display ?"Text":""}</h1>
        
    </div>
  );
}

export default App;
