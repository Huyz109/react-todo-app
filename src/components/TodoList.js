import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.todoList.map((todo) => (
                        <TodoItem key={todo.id} 
                                  todo={todo} 
                                  handleChange={this.props.handleChange}
                                  deleteItem={this.props.deleteItem}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;