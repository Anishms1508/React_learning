import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>My React App</h1>
    </div>
  )
}
// Jaise app ek function hai, waise hi yeh bhi ek function hai jisse hum React component kehte hain and use bhi kr skte hai.

// The question arises can I write my own react element here?
/*
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
}
    */

// agar react element convert hota hai isme then can't I just paste this here as is and make use of it?
// No I can't just paste this here as this is a custom react element that was designed for custom react which also had a custom render function that was designed specifically for it
// since render is render is a method that means that there must be some rules that must be followed i.e. yeh kya type ke parameters expect krra hai yaha pe humse. 
// This means that there is a particular type of syntax that is being expected of us, ki kis type ka object mai expect krra hu.
// so what should you do then? 

const anotherElement = (
  <a href="https://google.com" target = "_blank">visit google</a>
) // why does calling this work and not the functioin that we made?
// That is because render is not expecting the syntax that we wrote, instead it is expecting something different. But what?

anotherUser = "Chai aur code"

// to make our own react element:
const reactElement = React.createElement(
    'a', // first expected parameter is the tag
    {href: 'https://google.com', target: '_blank'}, // second expected parameter is an object of all the properties/attributes of the tag
    'click me to visit google', // third expected parameter is the text that is to be displayed
    anotherUser // the fourth expected parameter is the variable that you want to inject
)
// with this we have made our own react element



createRoot(document.getElementById('root')).render(
    reactElement
)
// har react  ek bundler use krta hai. Bundler ka kaam yeh hota hai ki behind the scene syntax ko sudharna, syntax ko upgrade krna, and syntax ko convert krna
// into the syntax of reactElement in customreact.js file
