import React from 'react';

function TodoItem(props) {
  return (
    <li className="flex items-center my-2">
      <input type="checkbox" className="mr-2" value={props.todo.completed} />
      <input
        type="text"
        defaultValue="Sample Todo"
        className="p-2 border rounded-md flex-grow"
        value={props.todo.text}
      />
      <button className="p-2 ml-2 bg-red-500 text-white rounded-md">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
