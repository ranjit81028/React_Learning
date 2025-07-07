

import { useState } from "react"
import Counter from "./Counter"

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Counter count={count} setCount = {setCount} />
    </div>
  )
}

export default App

///



const Counter = (props) => {
  const Increment = () => {
    props.setCount(props.count + 1);
  }
  const decrement = () => {
    props.setCount(props.count - 1);
  }
  return (
    <div>
      <button onClick={Increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
