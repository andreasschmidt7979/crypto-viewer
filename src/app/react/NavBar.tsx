import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button className="btn" onClick={() => navigate("/calendar")}>
        Calender
      </button>
      <button className="btn" onClick={() => navigate("/calculator")}>
        Calculator
      </button>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </nav>
  );
};

export default NavBar;
