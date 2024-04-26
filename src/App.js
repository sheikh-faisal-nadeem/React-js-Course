import React from 'react'
import "./App.css"
import Child from './Components/Child'

const App = () => {
  return (
    <div className="Props">
      <h2>What is Props in React js!!!</h2>

      <Child   Name="Faisal"    YTName="Code With Sheikh"   Adress="Pakistan"
      
          other={ { Phone:8584856486749 , Age:22   } }
      
      />
     
    </div>
  )
}

export default App
