/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  const history = new useHistory();
  const NavigateToInvestor = () => {
    console.log("going to page login");
    history.push("/Auth/investorRegister");
  };

  const NavigateToStartupper = () => {
    console.log("going to page login");
    history.push("/Auth/startupperRegister");
  };
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Your investor relationship hub
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Update investors, raise capital and track from single platform.
              </p>
              <div className="mt-12">
                <button
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  to="/auth/investorRegister"
                  onClick={NavigateToInvestor}
                >
                  investor
                </button>
                <button
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                  to="/auth/startupperRegister"
                  onClick={NavigateToStartupper}
                >
                  Startupper
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
