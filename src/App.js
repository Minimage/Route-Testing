import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useEffect
} from "react-router-dom";

import React from "react";
import "./styles.css";
import { Home } from "./Home";
import { About } from "./About";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
