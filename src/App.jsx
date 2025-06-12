import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Code with Nishant</h1>
      <h2>Hello, React 19 </h2>     
      <User/> 

      <h1>Counter Value: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count by 1</button>


    </>
  )
}

export default App
