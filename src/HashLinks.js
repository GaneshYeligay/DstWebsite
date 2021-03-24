import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Career from "./pages/common/Career";
import Team from "./pages/common/Team";
class HashLinks extends Component {
  render() {
    return (
      <div>
        <Link to="/pages/common/Career/">View Career</Link> |
        <Link to="/pages/common/Team/">View Team</Link>
        <Switch>
          <Route path="/pages/common/Career" component={Career} />
          <Route path="/pages/common/Team" component={Team} />
        </Switch>
      </div>
    );
  }
}
export default HashLinks;
