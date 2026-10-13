import { Link } from "react-router-dom";
import "../styles/Auth.css";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>LAAS AUTH</h1>
        <h2>Forgot Password</h2>

        <input type="email" placeholder="Enter Email" />

        <button>Verify</button>

        <p>
          <Link to="/">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;