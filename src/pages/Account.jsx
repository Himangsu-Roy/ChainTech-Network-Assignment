import React, { useState } from "react";

function Account() {
  // Dummy user data for demonstration
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    // Add other user details here
  });

  // State to track editing mode and edited user data
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({ ...userData });

  // Function to handle toggling edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    // Reset edited user data when toggling edit mode
    if (!isEditing) {
      setEditedUserData({ ...userData });
    }
  };

  // Function to handle input changes in edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  // Function to handle saving edited user data
  const handleSaveChanges = () => {
    // Here you can implement the logic for saving the edited user data
    console.log("Saving changes:", editedUserData);
    setUserData({ ...editedUserData });
    setIsEditing(false);
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container w-75  border-black border-opacity-10 border p-5">
        <h2>Account Management</h2>
        {isEditing ? (
          <div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={editedUserData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={editedUserData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={editedUserData.email}
                onChange={handleInputChange}
              />
            </div>
            {/* Add other user details fields here */}
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={toggleEditMode}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>First Name:</strong> {userData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            {/* Display other user details here */}
            <div className="w-25 d-grid">
              <button
                type="button"
                className="btn btn-dark"
                onClick={toggleEditMode}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
