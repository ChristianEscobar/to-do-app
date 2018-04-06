import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    // Set state here
    this.state = {
      task: ""
    }

    // Bind methods here
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({
      task: event.target.value
    });
  }

  handleSubmit() {
    
    this.props.addTask(this.state.task);
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.handleChange} />
        <button className="btn btn-outline-primary btn-sm" onClick={this.handleSubmit}>Add Task</button>
      </div>

    );
  }
}