import React, {Component} from 'react';
import './App.css';
import products from './products'
import Product from './Product'
import todosData from './todosData'
import TodoItem from './TodoItem'

//const array = products.map(item => <Product key = {item.id} product = {item} />);
//const todoComponents = todosData.map(item => <TodoItem key = {item.id} todo = {item} />);

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


export default App;
