import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todoListItems, setTodoListItems] = useState([]);

    const createTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodoListItems((prevItems) => [...prevItems, newTodo]);
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="w-4/5 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl mb-4">To-Do App</h1>
                <AddTodoForm createTodo={createTodo} />
                <TodoList todoListItems={todoListItems} />
            </div>
        </div>
    );
}

export default App;
