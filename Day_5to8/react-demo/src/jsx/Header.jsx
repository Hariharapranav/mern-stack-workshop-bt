import "../css/Header.css"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header-box">
      <h1>Wings of Fire</h1>
      <h3>-By A.P.J Abdul Kalam</h3>
      <Link to="/login">
      <button>Login</button></Link>
      
      
      
    </div>
  )
}

export default Header
