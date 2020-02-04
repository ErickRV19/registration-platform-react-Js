import React from "react";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm.js";
import Badge from "../components/Badge";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>{" "}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarLogo="https://pbs.twimg.com/profile_images/1175214019860451328/pHGskk0C_400x400.jpg"
                lastName="R."
                firtsName="Erick"
                JobTittle="Frontend Developer"
                twitter="ErickRV19"
              />
            </div>{" "}
            <div className="col-6">
              <BadgeForm />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default BadgeNew;
