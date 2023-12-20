import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  const { id, text, completed } = todo;

  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <>
      <input type="checkbox" checked={completed} onChange={handleToggleComplete} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button className='remove' onClick={handleRemoveTodo}>Remove</button>
      </>
  );
};

export default TodoItem;