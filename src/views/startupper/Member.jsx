import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Teams from "services/teams.service.js";
import Members from "services/member.service.js";
import { isConstructorDeclaration } from "typescript";
// components

// METHOD DELETE UPDATE MA YEKHDMOUCH
/// POST MA TEKHDEMECH KHATER  TEAMS LEZEM DROPDOWN LIST

const Member = ({ color }) => {
  //////// FOR CREATE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [poste, setPost] = useState("");
  const [teamId, setTeamId] = useState("");
  //////// FOR UPDATE
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPoste, setNewPost] = useState("");

  const [teams, setTeams] = useState([]);
  const [members, setMember] = useState([]);

  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedMember, setUpdatedMember] = useState();

  var MemberData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    poste: poste,
    teamId: teamId,
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getMembers();
  }, []);

  useEffect(() => {
    setUpdatedMember({
      ...updatedMember,
      firstName: setNewFirstName,
      lastName: setNewLastName,
      phoneNumber: setNewPhoneNumber,
      email: setNewEmail,
      poste: setNewPost,
    });
  }, [
    newFirstName,
    setNewLastName,
    newLastName,
    newPhoneNumber,
    newEmail,
    newPoste,
  ]);

  const getMembers = () => {
    Members.getMembers()
      .then((res) => {
        console.log("getMembers", res.data);
        setMember(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addMember = () => {
    Members.createMember(MemberData)
      .then((res) => {
        console.log("res555" + res);
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProcess = (id) => {
    console.log("updating process", id);
    setIsUpdating(true);
    var item = members.find((o) => o.id == id);
    setUpdatedMember(item);
    //updateStartup(id,{...item, name: Newname})
  };

  const updateMember = (id, MemberData) => {
    let data = {
      name: MemberData?.name,
    };
    console.log("updateStartup", id, data);
    Members.updateMember(data, id)
      .then((res) => {
        console.log(res?.data);
        getMembers();
        setIsUpdating(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllMembers = () => {
    console.log("deleteAllMembers");
    Members.deleteAllMembers()
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMember = (id) => {
    console.log("deleteMember");
    Members.deleteMember(id)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Teams.getTeams()
      .then((res) => {
        console.log("getTeams", res.data);
        setTeams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    MemberData.teamId = event.target.value;
  };

  console.log("items", teams);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Member Information
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewFirstName(e.target.value);
                      }}
                      value={updatedMember?.name}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Last Name
                </label>
                <div className="relative w-full mb-3">
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewLastName(e.target.value);
                      }}
                      value={updatedMember?.name}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewPhoneNumber(e.target.value);
                      }}
                      value={updatedMember?.name}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                      value={updatedMember?.name}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Poste
                  </label>
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setPost(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewPost(e.target.value);
                      }}
                      value={updatedMember?.name}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Team
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className={
                      "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    }
                    onChange={handleChange}
                  >
                    {(teams || []).map((team) => (
                      <option value={team?.id}>{team?.field}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {!isUpdating ? (
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={addMember}
              >
                Sumbit
              </button>
            ) : (
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => {
                  updateMember(updateMember?.id, updateMember);
                }}
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Members
              </h3>
            </div>

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={deleteAllMembers}
            >
              Delete All
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Avatar
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Poste
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Team
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {(members || []).map((member) => (
                <tr key={member.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={
                        require("assets/img/avatar-icon-images-4.jpg").default
                      }
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    ></img>{" "}
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    ></span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.firstName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.lastName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.phoneNumber}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.poste}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {member.team.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      //onClick={deleteStartup(item?.id)}
                      onClick={(e) => {
                        deleteMember(member?.id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      // onClick={updateProcess()}
                      onClick={(e) => {
                        updateProcess(member?.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Member;

Member.defaultProps = {
  color: "light",
};

Member.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
