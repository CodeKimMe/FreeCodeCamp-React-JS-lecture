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
      name: "Kim",
      age: 27
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}


export default App;
