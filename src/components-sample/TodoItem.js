import React from "react";

class TodoItem extends React.Component {
    render() {
        // Destructuring
        const {completed, id, title} = this.props.todo;
        // Return to client
        return(
            <li className="todo-item">
                <input type="checkbox" 
                       checked={completed}
                       onChange={() => this.props.handleChange(id)}
                />
                <span className={completed? "completed":null}>{title}</span>
                <button className="btn" 
                        onClick={() => this.props.deleteItem(id)}>
                        X
                </button>
            </li>
        );
    }
}

export default TodoItem;