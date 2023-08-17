import React, { useState } from 'react';

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.todo.text);

  const handleTextUpdate = () => {
    if (editValue.trim() !== '') {
      props.updateTodoText(props.todo.id, editValue.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center my-2">
      <input type="checkbox" className="mr-2" checked={props.todo.completed} 
        onChange={() => props.toggleCompletion(props.todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="p-2 border rounded-md flex-grow"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleTextUpdate}
          onKeyDown={(e) => e.key === 'Enter' && handleTextUpdate()}
        />
      ) : (
        <span 
          className={`flex-grow`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {props.todo.text}
        </span>
      )}
      
      <button 
        className="p-2 ml-2 bg-red-500 text-white rounded-md" 
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
