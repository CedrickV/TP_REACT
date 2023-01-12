import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/les_armes"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Weaponry</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
