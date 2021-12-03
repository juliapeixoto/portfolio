import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
