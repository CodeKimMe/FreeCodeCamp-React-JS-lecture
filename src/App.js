import React, {Component} from 'react';
import './App.css';
import products from './products'
import Product from './Product'
import todosData from './todosData'
import TodoItem from './TodoItem'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(id) {
    console.log("changed", id);
  }

  render() {
    const todoList = this.state.todos.map(item => <TodoItem key = {item.id} todo = {item} handleChange = {this.handleChange} />);
    return (
      <div>
        {todoList}
      </div>
    )
  }
}




/*counting app exercise
class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    return (
      <div className = "App">
        <h1>{this.state.count}</h1>
        <button onClick = {this.handleClick}>Change!</button>
      </div>
    );
  }
}
*/

/* Handling events in React (2:22:05)
function handleClick() {
  console.log("I was clicked!");
}

class App extends Component {

  render() {
    return (
      <div>
        <img onMouseOver = {() => console.log("hovered!")} src = "https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onClick = {handleClick}>Click Me</button>
      </div>
    )
  }
}
*/


//const array = products.map(item => <Product key = {item.id} product = {item} />);
//const todoComponents = todosData.map(item => <TodoItem key = {item.id} todo = {item} />);

//below is the todo list app.phase 4 (2:22:10 on freecodecamp lecture)
/*
class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todosList = this.state.todos.map(item => <TodoItem key = {item.id} todo = {item} />);
    return (
      <div>
        {todosList};
      </div>
    )
  }
}
*/

export default App;
