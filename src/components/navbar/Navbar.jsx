import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          marginBottom: "15px",

          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/">Buttons</Link>
        <Link to="/">Count</Link>
      </nav>
    </div>
  );
};

export default Navbar;
