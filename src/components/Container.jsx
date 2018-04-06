import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import "./Container.css";


export default class Container extends React.Component {
  constructor(props) {
    super(props);

    // Set state here
    this.state = {
      tasks: []
    }

    // Bind methods here
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    const currentTasks = this.state.tasks;

    currentTasks.push(task);

    this.setState({
      tasks: currentTasks
    });
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form addTask={this.addTask}/>
            <br/>
            <Tasks tasks={this.state.tasks}/>
          </div>
        </div>
      </div>
    );
  }
}