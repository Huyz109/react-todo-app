import React from "react";

class AddTodo extends React.Component {
    state = {
        title: "",
    };

    onInputChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        })
    }

    render() {

        return(
            <form className="form-container" onSubmit={this.addTodo}>
                <input type="text" 
                       placeholder="Add Todo..."  
                       value={this.state.title} 
                       className="input-text" 
                       onChange={this.onInputChange} />
                <input type="submit" 
                       value="Submit" 
                       className="input-submit" 
                       onSubmit={this.onSubmit}/>
            </form>
        )
    }
}

export default AddTodo;