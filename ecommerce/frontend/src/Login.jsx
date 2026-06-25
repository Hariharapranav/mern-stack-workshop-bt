import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "./AuthContext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <Header />
      <div className="login-page">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please log in to your account</p>

          {error && <div className="login-error">{error}</div>}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-password">Forgot?</a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
          </form>
          
          <div className="login-footer">
            Don't have an account? <a href="#" className="signup-link">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
