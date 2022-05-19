import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views
import Login from "views/auth/Login.jsx";
import Register from "views/auth/Register.jsx";
import InvestorRegister from "views/auth/InvestorRegister.jsx";
import StartupperRegister from "views/auth/StartupperRegister.jsx";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            /* style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }} */
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route
              path="/auth/investorRegister"
              exact
              component={InvestorRegister}
            />
            <Route
              path="/auth/startupperRegister"
              exact
              component={StartupperRegister}
            />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
