const MyApp = () => {
    const [userName, setUserName] = React.useState("");

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userName);
    }

    return(
        <div>
            <h1>{userName}</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={userName} onChange={handleUserNameChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

ReactDOM.render(<MyApp />,document.getElementById('root'));