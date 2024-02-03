import React, { useState } from "react";

function Account() {
  // Initial user data for demo, in real project user data come from database.
  const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
  };

  // State hooks for user data, edit mode, and edited user data
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({ ...initialUserData });

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    // If entering edit mode, initialize editedUserData with userData
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

  // Function to save edited user data
  const handleSaveChanges = () => {
    setUserData({ ...editedUserData });
    setIsEditing(false);
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container w-75  border-black border-opacity-10 border p-5">
        <h2 className="mb-5 text-center">Account Management</h2>
        <div>
          {isEditing ? (
            // If in edit mode, render input fields for editing user data
            <>
              {Object.entries(editedUserData).map(([key, value]) => (
                <div key={key} className="mb-3">
                  <label htmlFor={key} className="form-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    className="form-control"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <div>
                <button
                  type="button"
                  className="btn btn-info me-3 my-2  "
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
            </>
          ) : (
            // If not in edit mode, render user data
            <>
              {Object.entries(userData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                  {value}
                </p>
              ))}
              <div className="w-25 d-grid mt-4">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={toggleEditMode}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
