const todos = [
    {id: "01", text: "Baca buku React Uncover"},
    {id: "02", text: "Makan siang"},
    {id: "03", text: "Main game"},
];

const Todo = (props) => {
    return(
        <div className="todo">{props.text}
            <span id={props.id} onClick={props.onTodoClick}>x</span>
        </div>
    )
}

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = React.useState("");
    const [pesanError, setPesanError] = React.useState(null);

    const handleInputChange = (e) => {
        setInputTodo(e.target.value);
    }

    const handleSubmite = (e) => {
        e.preventDefault();
        if (inputTodo.trim() === "") {
            setPesanError("Todo tidak boleh kosong");
        } else {
            // input todo baru ke dalam state
            props.onAddTodo(inputTodo);
            // kosongkan input text dan pesanError
            setPesanError("")
            setInputTodo("");
        }
    }
    return(
        <form onSubmit={handleSubmite}>
            <div>
                <input type="text" placeholder="Add todo..." value={inputTodo}
                    onChange={handleInputChange}
                />
                {pesanError && <small>{pesanError}</small>}
            </div>
        </form>
    )
}

const MyApp = () => {
    const [arrayTodo, setArrayTodo] = React.useState(todos);

    const handleDeleteClick = (e) => {
        const newTodos = arrayTodo.filter((todo) => todo.id !== e.target.id);
        setArrayTodo(newTodos);
    }

    const handleAddTodo = (text) => {
        const newTodos = [...arrayTodo, {id: new Date().getTime().toString(), text: text}];
        setArrayTodo(newTodos)
    }

    return(
        <div className="container">
            {arrayTodo.map((todo) => (
                <Todo key={todo.id} id={todo.id} text={todo.text}
                onTodoClick={handleDeleteClick}/>
            ))}
            <TodoForm onAddTodo={handleAddTodo} />
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));