import React from 'react';

function TodoItem(props) {
        // Use destructuring
        const {completed, id, title} = props.todo;

        return(
            <div>
                <li className="todo-item">
                    <input type='checkbox' 
                           checked={completed} 
                           onChange = {() => props.handleChange(id)}
                    />
                    <span className={completed? "completed":null}>{title}</span>
                    <button className='btn' onClick={() => props.deleteItem(id)}>X</button>
                </li>
            </div>
        )
}

export default TodoItem;