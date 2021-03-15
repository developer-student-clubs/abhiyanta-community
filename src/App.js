import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Redirect } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";


// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
// Pages
import About from "./Pages/About";
import Notfound from "./Pages/NotFound";
import Team from "./Pages/Team";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Event from "./Pages/Event";


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/about"
            component={About}
            layout={LayoutDefault}
          />
          <AppRoute 
          exact path="/contact" 
          component={Contact}
           layout={LayoutDefault} />


          <AppRoute
           exact path="/project"
            component={Project}
             layout={LayoutDefault} />

           
             
          <AppRoute
            exact
            path="/team"
            component={Team}
            layout={LayoutDefault}
          />
           <AppRoute
            exact
            path="/event"
            component={Event}
            layout={LayoutDefault}
          />

          <AppRoute
           exact path="/careers"
            component={Career}
             layout={LayoutDefault} />
          <AppRoute
            path="/NotFound"
            component={Notfound}
            layout={LayoutDefault}
          />
          <Redirect to="/NotFound" />
        </Switch>
      )}
    />
  );
};

export default App;
