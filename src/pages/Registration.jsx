import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  // State to store user input for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic for registering the user with the provided credentials
    console.log("Registering user with:", { email, password });
    if (email) {
      navigate("/login");
    }
    // Clear input fields after submission
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container w-50 border-black border-opacity-10 border p-5">
        <div className="text-center">
          <h2>Register</h2>
          <p>Enter your information to create an account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-dark">
              Register
            </button>
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-dark" to="/login">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
