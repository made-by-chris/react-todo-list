import React from 'react';

function TodoItem() {
  return (
    <li className="flex items-center my-2">
      <input type="checkbox" className="mr-2" />
      <input
        type="text"
        defaultValue="Sample Todo"
        className="p-2 border rounded-md flex-grow"
      />
      <button className="p-2 ml-2 bg-red-500 text-white rounded-md">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
