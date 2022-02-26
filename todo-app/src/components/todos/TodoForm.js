import { useState } from "react"

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = useState("");
    const [pesanErrror, setPesanError] = useState(null);

    const handleInputChange = (e) => {
        setInputTodo(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputTodo.trim() === "") {
            setPesanError("Todo tidak boleh kosong");
        } else {
            // Input todo baru ke halaman state
            props.onAddTodo(inputTodo);
            // kosongkan input text
            setPesanError("");
            setInputTodo("");
        }
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" value={inputTodo} onChange={handleInputChange}/>
                {pesanErrror && <small>{pesanErrror}</small>}
            </div>
        </form>
    )
}

export default TodoForm;