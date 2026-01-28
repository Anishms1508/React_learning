import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Anish',
    age: '21'
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card  username="Anigraphy" btnText="Join" />
    <Card  username="Anish Sharma"  />
    </>
  )
}

export default App
