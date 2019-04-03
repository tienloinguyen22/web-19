import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';

class App extends Component {
  state = {
    inputValue: '',
    todos: [], // array of todo items (string)
    dones: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // push new item to "todos" array
    const newTodoItem = this.state.inputValue;
    this.setState({
      todos: [...this.state.todos, newTodoItem],
      inputValue: '',
    });
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleDeleteItem = (item) => {
    this.setState({
      todos: this.state.todos.filter((todoItem) => {
        if (todoItem === item) {
          return false;
        } else {
          return true;
        }
      }),
    });
  }

  finishItem = (item) => {
    this.setState({
      dones: [...this.state.dones, item],
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add item'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />

          <button type='submit'>Add</button>
        </form>

        <div className='todo-list'>
          {this.state.todos.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                index={index}
                handleDelete={this.handleDeleteItem}
                finishItem={this.finishItem}
                isFinished={this.state.dones.indexOf(item) > -1}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
