import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)
  // This is how you make a hook

  // let Counter = 5

  const addValue = () => {      
      // Counter = Counter + 1
      setCounter(Counter+1)
  }

  const removeValue = () => {
    if (Counter<1) {
      Counter = 0
      alert("You can't go below zero")
      setCounter(Counter = 0)
    }
    setCounter(Counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>
      <button
      onClick={addValue}
      >Add value {Counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App
