import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const increase = () => {
    // console.log("increase clicked")
    if (counter >= 20) {
      alert("You can't go above")
    }
    setCounter(counter + 1 )
  }

  const decrease = () => {
    if (counter <= 0 ) {
      alert("You can't go below")
    } else {
      setCounter(counter - 1 )
    } 
  }



  return (
    <>
      <h1>Chai aur Code </h1>
      <p style={{color: "red"}}><b>NOTE: </b> UI updation laai react control garxa </p>

      <h2>Counter Value: {counter} </h2>

      <button onClick={increase}>add</button>
      <br />
      <button onClick={decrease}>substract</button>

      <p>The counter value is {counter}</p>

      <p>footer: {counter}</p>

    </>
  )
}

export default App
