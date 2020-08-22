import React from 'react';



class TodoItem extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input
          type = "checkbox"
          checked = {this.props.todo.completed}
          onChange = {() => this.props.handleChange(this.props.todo.id)}
        />
        <p>{this.props.todo.text}</p>
      </div>
    )
  }
}

/*
function TodoItem(props) {
  return (
    <div>
      <input type = "checkbox" checked = {props.todo.completed} />
      <p>{props.todo.text}</p>
    </div>
  )
}
*/

export default TodoItem;
