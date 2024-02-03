import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Login page
function Login() {
  const navigate = useNavigate();
  // State to manage form data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Input data change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    // Redirect to account page after login
    navigate("/account");
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container w-50 border-black border-opacity-10 border p-5">
        <div className="text-center">
          <h2>Login</h2>
          <p>Please enter your email and password</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Email input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit button */}
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </div>
          {/* Registration link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link className="text-dark" to="/registration">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
