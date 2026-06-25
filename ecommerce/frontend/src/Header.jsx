import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

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
        {user ? (
          <>
            <span className="header-user">Hello, {user.username}</span>
            <Link to="/orders">Orders</Link>
            <button className="logout-button" onClick={() => logout()}>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/">Cart</Link>
      </div>
    </div>
  );
}

export default Header;