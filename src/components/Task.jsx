import React from "react";
import "./Task.css";

export default class Task extends React.Component {

  render() {
    return(
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input"/>
          </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox" value={this.props.task} readOnly/>
        <button type="button" className="btn btn-outline-primary btn-sm">Complete</button>
        <button type="button" className="btn btn-outline-primary btn-sm">Edit</button>
      </div>
    );
  }
}