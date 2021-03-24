import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Career from "./pages/common/Career";
import Team from "./pages/common/Team";
class BrowserRouterLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/routing/browser-router/pages/common/Career/">
          View Career
        </Link>{" "}
        |<Link to="/routing/browser-router/pages/common/Team/">View Team</Link>
        <Switch>
          <Route
            path="/routing/browser-router/pages/common/Career/"
            component={Career}
          />
          <Route
            path="/routing/browser-router/pages/common/Team/"
            component={Team}
          />
        </Switch>
      </div>
    );
  }
}
export default BrowserRouterLinks;
