import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(times) {
    this.setState(prevState => {
      return {
        count: prevState.count + times
      }
    })
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(e => {
        if (e.id === id) {
          e.completed = !e.completed
        }
        return e;
      })
      return {
        todos: updateTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleClick(1)}>Click +1!</button>
        {todoItems}
      </div>
    );
  }
}

export default App;
