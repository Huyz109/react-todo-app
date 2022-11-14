import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return(
        <div>
            <ul>
                {props.todoList.map((todo) => (
                    <TodoItem key={todo.id} 
                                todo={todo} 
                                handleChange={props.handleChange}
                                deleteItem={props.deleteItem}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;