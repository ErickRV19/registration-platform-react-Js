import React from "react";

class BadgeForm extends React.Component {
  handleChange(e) {
    //leyendo la informacion del label
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick(e) {
    // click en el boton
    console.log("Botton was clicked");
  }
  handleSubmit(e) {
    // mandando el submit del fomulario
    e.preventDefault();
    console.log("form was submitted");
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firtsName"
            />
          </div>

          <button onClick={this.handleClick} className="botton btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
