import React from "react";
import Links from "./Links";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="signup">
        <Links />
        <h1>Sign Up for Free</h1>
        <form>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
          <input type="text" placeholder="Email Address*" required />
          <input type="text" placeholder="Set a Password*" required />
          <input type="submit" value="GET STARTED" />
        </form>
      </div>
    );
  }
}
export default Signup;
