import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>;
}
//This component needs to render four NavLink components. They will be for /, /movies, /directors, /actors, in this order (test checks for this).
export default NavBar;
