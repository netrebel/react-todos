import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {

  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {todoItems}
    </div>
  );
}

export default App;
