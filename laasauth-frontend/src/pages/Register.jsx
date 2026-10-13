import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Sending Data:", formData);

    try {
      const response = await api.post("http://localhost:720/api/auth/register", formData);

      console.log("SUCCESS:", response);

      alert(response.data.message);

      if (response.data.message === "Registration Successful") {
        navigate("/");
      }
    } catch (error) {
      console.log("========== AXIOS ERROR ==========");
      console.log("Error Object:", error);
      console.log("Message:", error.message);
      console.log("Response:", error.response);
      console.log("Request:", error.request);
      console.log("Config:", error.config);

      if (error.response) {
        alert(
          `Status: ${error.response.status}\n\n${JSON.stringify(
            error.response.data,
            null,
            2
          )}`
        );
      } else if (error.request) {
        alert("Backend did not respond.\n\nCheck the browser console.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
  type="submit"
  onClick={() => console.log("REGISTER BUTTON CLICKED")}
>
  Register
</button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;