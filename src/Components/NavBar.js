import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Pages/Home";
import Header from "../Components/Header";
import About from "../Pages/About";
import Faq from "../Pages/Faq";
import Notfound from "../Pages/NotFound";
import Team from "../Pages/Team";
import Project from "../Pages/Project";

function NavBar() {
  return (
    <div>
      <Header></Header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/project" component={Project} />
        <Route path="/NotFound" component={Notfound} />
        <Redirect to="/NotFound" />
      </Switch>
 
    </div>
  );
}

export default NavBar;
