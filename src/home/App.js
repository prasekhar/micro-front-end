import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./components/Dashboard";

const App = () => (
  <Router basename="/home">
    <Route
      render={({ location }) => (
        <div style={{ position: "relative", height: "100%" }}>
          <Route exact path="/" component={Dashboard} />
          <Switch location={location}>
            {/*<Route exact path="/contact" component={ContactUs} />*/}
          </Switch>
        </div>
      )}
    />
  </Router>
);
export default App;
