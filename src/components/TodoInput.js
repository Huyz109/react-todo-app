import React, { useState } from "react";

function TodoInput(props) {
    const [inputValue, setInputValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        props.addTodo(inputValue);
        setInputValue("");
    }

    const inputTodo = (input) => {
        setInputValue(input);
    }

    return(
        <form className="form-container">
            <input type="text" 
                    className="input-text" 
                    placeholder="Add Todo"
                    value={inputValue}
                    onChange={(e) => inputTodo(e.target.value)}/>
            <input type="submit" 
                    className="input-submit" 
                    value="Submit"
                    onClick={(e) => submit(e)}/>
        </form>
    )
}

export default TodoInput;