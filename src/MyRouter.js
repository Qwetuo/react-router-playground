import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import TacosFeed from "./TacosFeed";
import TwitterFeed from "./TwitterFeed";
import NavLinks from "./NavLinks";
import { BrowserRouter as Router } from "react-router-dom";

const MyRouter = () => {
  return (
    <Router>
      <div>
        <NavLinks />
        <Route exact path="/events/:id" component={HomePage} />
        <Route exact path="/events" component={TacosFeed} />
        <Route path="/tacos" component={TacosFeed} />
        <Route path="/twitter" component={TwitterFeed} />
      </div>
    </Router>
  );
};

export default MyRouter;
