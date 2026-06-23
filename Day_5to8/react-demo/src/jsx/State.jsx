import { useState } from "react"

function State() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("false")

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Click to Add</button><br/>
        <h2>Answer: {answer}</h2>
        <button onClick={()=>{setAnswer("true")}}>Change Answer</button>
    </div>
  )
}

export default State


// useState --> special function aka Hook