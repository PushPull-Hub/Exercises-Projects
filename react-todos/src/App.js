import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Input from './components/Input';
// import { text } from 'express';

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (text, id) => {
    const newTodo = {
      id: id,
      todo: text,
      completed: false,
      done: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
