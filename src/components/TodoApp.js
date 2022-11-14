import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

function TodoApp() {
    const [todoList, setTodoList] = useState([]);

    const handleCheckboxChange = (id) => {
        setTodoList(
            todoList.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    const deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => setTodoList(
                    [...todoList.filter(todo => {
                        return todo.id !== id;
                    })]
                )
            )
    }
    
    const addTodo = (title) => {
        const newTodo = {
            id: todoList.length + 1,
            title: title,
            completed: false,
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then(response => {
                console.log(todoList.length)
                setTodoList([...todoList, response.data])
            })
    }

    useEffect(() => {
        const config = {
            params: {
                _limit: 5
            }
        }
        // Create GET request to get todos list
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => setTodoList(response.data));
    }, [])

    return(
        <div className="todo-container">
            <Header />
            <TodoInput addTodo = {addTodo}/>
            <TodoList todoList={todoList} 
                      handleChange={handleCheckboxChange}
                      deleteItem = {deleteItem}
            />
        </div>
    )
}

export default TodoApp;