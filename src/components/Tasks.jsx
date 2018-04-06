import React from "react";
import Task from "./Task";

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    // Set state

    // Bind methods
    this.showTasks = this.showTasks.bind(this);
  }

  showTasks() {
    return this.props.tasks.map( (task, index) => <Task key={index} task={task}/>);
  }

  render() {
    return(
      <div>
        {this.showTasks()}
      </div>
    );
  }
}