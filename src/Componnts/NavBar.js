import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Faq from "../Pages/Faq";
import Notfound from "../Pages/NotFound";
import Team from "../Pages/Team";

function NavBar() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/team" component={Team} />
        <Route path="/NotFound" component={Notfound} />
        <Redirect to="/NotFound" />
      </Switch>
    </div>
  );
}

export default NavBar;
