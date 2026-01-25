import Chai from "./chai";

function App() {

  const username = "Chai Aur Code"

  return (
      <>
          <Chai />
          <h1>chai aur react {username}</h1> 
          <p>test para</p>
      </>
      // what is in the {} is called an expression
      // and what we have used an evaluated expression
      // so what is an evaluated expression?
      // an evaluated expression is any JavaScript expression that the engine computes to produce a value.
      // the <> </> is called React Fragment which is used to group multiple elements without adding extra nodes to the DOM as in react you can only return a single element from a component 
  )
}

export default App
