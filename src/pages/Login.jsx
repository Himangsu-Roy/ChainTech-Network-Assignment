import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="vh-100 d-flex align-items-center ">
      <div className="container w-50 border-black border-opacity-10 border p-5">
        <div className="text-center">
          <h2>Login</h2>
          <p>Please enter your email and password</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <label htmlFor="emal" className="form-label">
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
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </div>
          <p className="text-center mt-4">
            Don't have an account? <Link className="text-dark" to="/registration">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
