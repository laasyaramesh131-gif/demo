import "../styles/Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>LAAS AUTH</h1>
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Sign In</button>

       <p>
  <Link to="/forgot-password">Forgot Password?</Link>
</p>

<p>
  Don't have an account?{" "}
  <Link to="/register">Register</Link>
</p> 
      </div>
    </div>
  );
}

export default Login;