import React from "react";
import Links from "./Links";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login">
        <Links />
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Email*" required />
          <input type="text" placeholder="Password*" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Login;
