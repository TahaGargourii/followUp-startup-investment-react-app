import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminSidebar from "components/Sidebar/AdminSidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Users from "views/admin/Member";
import HeaderStatsStartupper from "./../components/Headers/HeaderStatsStartupper";

export default function Admin() {
  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStatsStartupper />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/users" exact component={Users} />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
