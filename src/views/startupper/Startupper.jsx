import React, { useState, useEffect } from "react";

// METHOD DELETE UPDATE MA YEKHDMOUCH YAANY BSH IBADEL LES DONNEE MT3OU


import axios from "axios";
import PropTypes from "prop-types";
import Startuppers from "services/startupper.service.jsx";
const Startupper = ({ color }, startupperID) => {
  const [name, setName] = useState("");
  var StartupperData = {
    name: name,
  };
  const [startuppers, setStartupper] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    Startuppers.getStartuppers()
      .then((res) => {
        console.log("getStartuppers", res.data);
        setStartupper(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addStartupper = (StartupperData) => {
    console.log("addStartupper");
    Startuppers.createStartupper(StartupperData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStartupper = (id, StartupperData) => {
    console.log("updateStartupper");
    Startuppers.updateStartupper(id, StartupperData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllStartuppers = () => {
    console.log("deleteAllStartuppers");
    Startuppers.deleteAllStartuppers()
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStartupper = (id) => {
    console.log("deleteStartupper");
    Startuppers.deleteStartupper(id)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    /*  */
    <div></div>
  );
};

export default Startupper;

Startupper.defaultProps = {
  color: "light",
};

Startupper.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
