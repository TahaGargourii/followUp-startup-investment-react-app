import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";

import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.jsx";
import Profile from "views/Profile.jsx";
import Index from "views/Index.jsx";
import Investor from "layouts/Investor";
import Startupper from "layouts/Startupper";
import requireAuth from "./Helpers/isAuthenticated";
import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={requireAuth(Admin)} />
          <Route path="/auth" component={Auth} />
          <Route path="/investor" component={requireAuth(Investor)} />
          <Route path="/startupper" component={requireAuth(Startupper)} />
          {/* add routes without layouts */}
          <Route path="/landing" exact component={Landing} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" exact component={Index} /> 
          
          {/* add redirect for first page */}
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
