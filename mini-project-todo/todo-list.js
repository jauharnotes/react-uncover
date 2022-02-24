const todos = [
    {id: "01", text: "Baca buku React Uncover"},
    {id: "02", text: "Makan siang"},
    {id: "03", text: "Main game"},
]

class Todo extends React.Component {
    render() {
        return(
            <div className="todo">{this.props.text}
                <span id={this.props.id} onClick={this.props.onTodoClick}>x</span>
            </div>
        )
    }
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputTodo: "", pesanError: null, arrayTodo: todos};
    }

    handleInputChange =(e) => {
        this.setState({ inputTodo: e.target.value });
    }

    handleSubmite = (e) => {
        e.preventDefault();
        if (this.state.inputTodo.trim() === "") {
            this.setState({ pesanError: "Todo tidak boleh kosong"});
        } else {
            const newTodos = [
                ...this.state.arrayTodo, {id: new Date().getTime().toString(), text: this.state.inputTodo}
            ];
            this.setState({ arrayTodo: newTodos });

            // kosongkan input text
            this.state.inputTodo = "";
        }
    }

    handleDeleteClick = (e) => {
        const newTodos = this.state.arrayTodo.filter((item) => item.id !== e.target.id);
        this.setState({ arrayTodo: newTodos});
    }

    render() {
        console.log(this.state.arrayTodo);
        return(
            <div className="container">
                {this.state.arrayTodo.map((todo) => 
                   <Todo key={todo.id} id={todo.id} text={todo.text} onTodoClick={this.handleDeleteClick}/>
                )}

                <form onSubmit={this.handleSubmite}>
                    <div>
                        <input type="text" placeholder="Add todo..." value={this.state.inputTodo}
                            onChange={this.handleInputChange}
                            />
                            {this.state.pesanError && <small>{this.state.pesanError}</small>}
                    </div>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));