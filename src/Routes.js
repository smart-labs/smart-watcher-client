import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login"  component={Login} />

      <Redirect from="/*" to="/" />
    </Switch>
  );
}

export default App;
