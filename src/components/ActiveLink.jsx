import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "bg-[#EE552A] text-white py-[10px] px-[15px] rounded" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
