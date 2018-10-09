import React from "react";
import { Route } from "react-router";
import Heroes from "./Heroes";
import { Switch } from "react-router-dom";
import Hero from "./hero/hero";

const HeroesRoutes = () => (
  <Switch>
    <Route exact path="/heroes" render={() => <Heroes />} />
    <Route path='/heroes/:id' render={(match) => <Hero match={match.match} />} />
  </Switch>
);

export default HeroesRoutes;
