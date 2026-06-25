import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">

      <div className="logo" onClick={() => navigate("/")}>
        Shopy
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-box"
      />

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/">Cart</Link>
      </div>

    </div>
  );
}

export default Header;