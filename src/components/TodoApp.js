import React from "react";
import Header from "./layout/Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

class TodoApp extends React.Component {
    state = {
        todoList: []
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => this.setState({
                    todoList: [
                        ...this.state.todoList.filter(todo => {
                            return todo.id !== id;
                    })
                ]
                })
            )
    }
    
    addTodo = (title) => {
        const newTodo = {
            id: this.state.todoList.length+1,
            title: title,
            completed: false,
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then(response => {
                console.log(response.data)
                this.setState({
                    todoList: [...this.state.todoList, response.data]
                })
            })
    }

    componentDidMount() {
        const config = {
            params: {
                _limit: 5
            }
        }
        // Create GET request to get todos list
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => this.setState({todoList: response.data}));
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