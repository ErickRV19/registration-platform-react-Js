import React from "react";

class BadgeForm extends React.Component {
  handleChange(e) {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick(e) {
    console.log("Botton was clicked");
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("form was sumitted");
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
