import React, { Component } from 'react';
import TodoItem from './TodoItem';
import CompletedTodos from './CompletedTodos';

import './List.css';

class List extends Component {

  state = {
    todos: [{}],
    value: '',
    completed: []
  }

  inputRef = React.createRef()

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    this.setState({ todos: [json] });
  }

  userInput = ( e ) => {
    this.setState({
      value: e.target.value,
    });
  }

  onAddTodo = () => {
    const todos = this.state.todos;

    this.setState({
      todos: [...todos, { title: this.state.value, id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1 } ],
      value: ''
    });

    this.inputRef.current.focus();
  }

  onDeleteTodo = ( title ) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.title !== title )
    });
  }

  onDeleteCompletedTodo = ( title ) => {
    this.setState({
      completed: this.state.completed.filter( todo => todo.title !== title )
    });
  }

  onCompleteTodo = ( todoTitle ) => {
    const completedTodo = this.state.todos.filter( todo => todo.title === todoTitle );

    this.setState({
      todos: this.state.todos.filter( todo => todo.title !== todoTitle ),
      completed: [...this.state.completed, completedTodo[0]]
    });
  }

  onKeyDown = ( e ) => {
    if(e.key === 'Enter'){
      this.addTodo();
    }
  }

  render() {
    return (
      <div className="todo-container">
        <div className="list">
          <div className="input-btn">
            <input
              ref={this.inputRef}
              value={this.state.value}
              onChange={this.userInput}
              type='text'
              placeholder='Add todo'
              onKeyDown={this.onKeyDown} />
            <button
              id='addTodo'
              onClick={this.onAddTodo}
              disabled={!this.state.value}>
                Add
            </button>
          </div>
          <TodoItem
            todoList={this.state.todos}
            deleted={this.onDeleteTodo}
            completed={this.onCompleteTodo}
          />
        </div>
        { this.state.completed.length > 0 ?
        <>
         <p className='completed-title'>Completed</p>
          <CompletedTodos
            completedTodos={this.state.completed}
            deleted={this.onDeleteCompletedTodo}/>
        </>
          : ''
        }
      </div>
    );
  }
}

export default List;