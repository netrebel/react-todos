import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoItems : todosData.map(item => <TodoItem key={item.id} item={item} />)
    }
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoItems}
      </div>
    );
  }
}

export default App;
