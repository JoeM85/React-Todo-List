import React from 'react';
import PropTypes from "prop-types";
import './TodoItem.css';

const TodoItem = ({ todoList, completed, deleted }) => {

  const items = todoList.map( ( todo, i ) => {
    return <div
      key={i}
      className='todo-item'>
      <p className='todo-text'>{`${todo.id}) ${todo.title}`}</p>
      <div className='icon-container'>
        <button onClick={() => completed( todo.title )}><i className='fas fa-check'></i></button>
        <button onClick={() => deleted( todo.title )}><i className='fas fa-times'></i></button>
      </div>
    </div>;
  });

  return (
    <>
      {items}
    </>
  );
};

TodoItem.propTypes = {
  todoList: PropTypes.array,
  completed: PropTypes.func,
  deleted: PropTypes.func
};

export default TodoItem;