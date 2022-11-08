import React from 'react';

class TodoItem extends React.Component {
    render() {
        return(
            <div>
                <li className="todo-item">
                    <input type='checkbox' 
                           checked={this.props.todo.completed} 
                           onChange = {() => this.props.handleChange(this.props.todo.id)}
                    />
                    {this.props.todo.title}
                    <button className='btn' onClick={() => this.props.deleteItem(this.props.todo.id)}>X</button>
                </li>
            </div>
        )
    }
}

export default TodoItem;