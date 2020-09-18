import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../components/auth";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="*" component={Auth} />
      </Switch>
    </Router>
  );
};

export default routes;
