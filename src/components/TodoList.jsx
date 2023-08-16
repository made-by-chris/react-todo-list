import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ul>
            {props.todoListItems.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
