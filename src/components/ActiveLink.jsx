import { NavLink } from "react-router-dom";

// ActiveLink component
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      {/* NavLink component from react-router-dom for handling active states of links */}
      <NavLink
        to={to} // The destination path of the link
        // Inline function to determine the className based on isActive property
        className={
          ({ isActive }) =>
            // Conditional class based on isActive state
            isActive
              ? "bg-dark text-white py-2 px-3 rounded link-underline-opacity-0 link-underline" // Applied when link is active
              : "link-underline-opacity-0 link-underline text-dark" // Applied when link is not active
        }
      >
        {children} {/* The content of the link */}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
