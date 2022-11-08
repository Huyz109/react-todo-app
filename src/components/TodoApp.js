import React from "react";
import Header from "./layout/Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    state = {
        todoList: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true,
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false,
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false,
            }
        ]
    }

    handleCheckboxChange = (id) => {
        this.setState({
            todoList: this.state.todoList.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteItem = (id) => {
        this.setState({
            todoList: this.state.todoList.filter(todo => {
                return todo.id !== id;
            })
        })
    }
    
    addTodo = (title) => {
        const newTodo = {
            id: this.state.todoList.length+1,
            title: title,
            completed: false,
        }
        this.setState({
            todoList: [...this.state.todoList,newTodo]
        })
    }

    render() {
        return(
            <div className="todo-container">
                <Header />
                <TodoInput addTodo = {this.addTodo}/>
                <TodoList todoList={this.state.todoList} 
                          handleChange={this.handleCheckboxChange}
                          deleteItem = {this.deleteItem}
                />
            </div>
        )
    }
}

export default TodoApp;