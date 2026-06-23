import "./Header.css";

function Header() {
  return (
    <div className="header">

      <div className="logo">
        Shopy
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-box"
      />

      <div className="nav-links">
        <a href="/">Login</a>
        <a href="/">Cart</a>
      </div>

    </div>
  );
}

export default Header;