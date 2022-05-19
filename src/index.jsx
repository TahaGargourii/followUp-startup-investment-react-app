import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.jsx";
import Profile from "views/Profile.jsx";
import Index from "views/Index.jsx";
import Investor from "layouts/Investor";
import Startupper from "layouts/Startupper";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/*     <Route path="/admin" component={Admin} /> */}
      <Route path="/auth" component={Auth} />
      <Route path="/investor" component={Investor} />
      <Route path="/startupper" component={Startupper} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
