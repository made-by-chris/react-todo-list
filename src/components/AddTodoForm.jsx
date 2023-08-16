import React from 'react';

function AddTodoForm() {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="p-2 border rounded-md w-2/3"
      />
      <button className="p-2 ml-2 bg-blue-500 text-white rounded-md">
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;
