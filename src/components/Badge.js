import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/FotoEnca.svg";
//import avatarLogo from "";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarLogo}
            alt="Avatar"
          />
          <h1>
            {" "}
            {this.props.firtsName} <br /> {this.props.lastName}{" "}
          </h1>{" "}
        </div>
        <div className="Badge__section-info">
          <h3> {this.props.jobTittle} </h3> <div> @ {this.props.twitter} </div>{" "}
        </div>
        <div className="Badge__footer"> #sitioParaLAConferencia </div>{" "}
      </div>
    );
  }
}

export default Badge;
