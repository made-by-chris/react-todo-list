import React, { useState } from 'react';

function AddTodoForm(props) {
    const [formInputValue, setFormInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formInputValue) {
            props.createTodo(formInputValue);
            setFormInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formInputValue}
                onChange={(e) => setFormInputValue(e.target.value)}
                placeholder="Add a new to-do"
                className="p-2 border rounded-md w-2/3"
            />
            <button className="p-2 ml-2 bg-blue-500 text-white rounded-md">
                Add
            </button>
        </form>
    );
}

export default AddTodoForm;
