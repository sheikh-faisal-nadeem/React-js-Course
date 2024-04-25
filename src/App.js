import React , {useState} from "react";

import "./App.css";

function App() {
 
    const[data,SetData]=useState(5)

    function Update(){

          SetData(data*5)

    }
    console.log(data)


 
  return (
    <div className="State">
      <h2>What is State!!!</h2>
      <h2>Add on Click {data} </h2>
      <button  onClick={Update} >Add Me</button>
    </div>
  );
}

export default App;
