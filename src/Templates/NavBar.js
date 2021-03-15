import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "/Header";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Notfound from "../Pages/NotFound";
import Team from "../Pages/Team";
import Project from "../Pages/Project";
import Career from "../Pages/Career";
import Event from "../Pages/Event";

function NavBar() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/careers" component={Career} />
        <Route exact path="/event" component={Event} />
        <Route path="/NotFound" component={Notfound} />
        <Redirect to="/NotFound" />
      </Switch>

    </div>
  );
}

export default NavBar;
