import React from 'react';
import PropTypes from "prop-types";
import './CompletedTodos.css';

const CompletedTodo = ({ completedTodos, deleted }) => {
  const completedTodo = completedTodos.map((todo, i) => {
    return (
      <div
        key={i}
        className='todo-item'>
        <p className='todo-text strike-through'>{`${ todo.id }) ${ todo.title }`}</p>
        <div className='icon-container'>
          <button onClick={() => deleted( todo.title )}><i className='fas fa-times'></i></button>
        </div>
      </div>);
  });

  return (
    <div className='completed-container'>
      {completedTodo}
    </div>
  );
};

CompletedTodo.propTypes = {
  completedTodos: PropTypes.array,
  deleted: PropTypes.func
};

export default CompletedTodo;
