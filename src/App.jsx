import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
function App() {
  const [todoListItems, setTodoListItems] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  const createTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodoListItems([...todoListItems, newTodo]);
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todoListItems.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoListItems(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todoListItems.filter(todo => todo.id !== id);
    setTodoListItems(filteredTodos);
  };

  const updateTodoText = (id, newText) => {
    const updatedTodos = todoListItems.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodoListItems(updatedTodos);
  };

  const filteredTodos = () => {
    const filtered = todoListItems.filter(todo => todo.text.toLowerCase().includes(filterInput.toLowerCase()));
    return filtered.length > 0 ? filtered : todoListItems;
  };

  const clearCompleted = () => {
    const activeTodos = todoListItems.filter(todo => !todo.completed);
    setTodoListItems(activeTodos);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center pt-10">
      <div className="w-4/5 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex w-full align-center justify-center gap-2 mb-4">
          <p className="">To-Do App</p>
          <SearchBar filterInput={filterInput} setFilterInput={setFilterInput} />
          <button onClick={clearCompleted} className="text-sm text-gray-500 hover:text-gray-600 border rounded-full p-2">Clear Completed</button>
        </div>
        <AddTodoForm createTodo={createTodo} />
        <TodoList 
          todoListItems={filteredTodos()}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
          updateTodoText={updateTodoText}
        />
      </div>
    </div>
  );
}

export default App;
