import { useState } from 'react'
import '../css/Product.css'

function Product(props) {

  const [count, setCount] = useState(0)

  return (
    <div className="product-card">
      <img src={props.url}></img>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <div className='btn-all'>
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <p>{count}</p>
          <button onClick={()=>{setCount(count-1)}}>-</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Product