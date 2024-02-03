import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Registration page
function Registration() {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Input change handler to update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Validate email
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Handle form submission
    console.log("Registering user with:", formData);
    navigate("/login");

    // Clear input fields after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Email validation function
  const isValidEmail = (email) => {
    // Regex pattern to validate email format
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container w-50 border-black border-opacity-10 border p-5">
        <div className="text-center">
          <h2>Register</h2>
          <p>Enter your information to create an account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Input fields for first name and last name */}
          <div className="d-flex gap-2">
            <div className="mb-3 w-100 ">
              <label htmlFor="firstname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 w-100">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Input fields for email, password, and confirm password */}
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {/* Register button */}
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-dark">
              Register
            </button>
          </div>
          {/* Link to login page */}
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
