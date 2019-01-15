import React from "react";
import { NavLink } from "react-router-dom";

class Links extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="links">
        <NavLink to="/">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}
export default Links;
