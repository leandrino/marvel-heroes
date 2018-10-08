import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

const HomeRoutes = () => <Route exact path="/" component={Home} />;

export default HomeRoutes;
