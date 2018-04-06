import React from "react";

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    // Set state

    // Bind methods
    this.showTasks = this.showTasks.bind(this);
  }

  showTasks() {
    console.log(this.props.tasks);
    return this.props.tasks.map(task => <div key={task}><span>{task}</span></div>);
  }

  render() {
    return(
      <div>
        {this.showTasks()}
      </div>
    );
  }
}