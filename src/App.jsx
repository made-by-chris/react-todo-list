import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="w-4/5 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl mb-4">To-Do App</h1>
                <AddTodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
