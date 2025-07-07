import { useState } from "react";
import Random from "./Random";



const App = () => {
  const [num, setNum] = useState(Math.floor(Math.random()*100))
  return (
    <div>
      <Random num = {num} setNum = {setNum}/>
    </div>
  )
}

export default App
//




const Random = ({ num, setNum }) => {

  const Generate = () => {
    setNum(Math.floor(Math.random() * 100));
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Generate}>Generate Random Number</button>
    </div>
  )
}

export default Random