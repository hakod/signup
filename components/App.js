import React from "react";
import "../client/styles.scss";
import Links from "./Links";
import Signup from "./Signup";
import Login from "./Login";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route path="/login/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
