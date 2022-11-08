import React from "react";

class TodoInput extends React.Component {
    state = {
        value: ""
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value,4);
        this.setState({
            value: "",
        })
    }

    inputTodo = (input) => {
        this.setState({
            value: input
        })
    }

    render() {
        return(
            <form className="form-container">
                <input type="text" 
                       className="input-text" 
                       placeholder="Add Todo"
                       value={this.state.value}
                       onChange={(e) => this.inputTodo(e.target.value)}/>
                <input type="submit" 
                       className="input-submit" 
                       value="Submit"
                       onClick={(e) => this.submit(e)}/>
            </form>
        )
    }
}

export default TodoInput;