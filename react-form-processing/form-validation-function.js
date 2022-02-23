const MyApp = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({ username: "", email: ""});

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);

        let pesanError;
        // validasi username
        if (!event.target.value.trim()) {
            pesanError = "Username tidak boleh kosong";
        } else if (event.target.value.length < 6) {
            pesanError = "Username minimal 6 karakter";
        } else {
            pesanError = "";
        }

        // update error state
        setErrors((prevError) => ({ ...prevError, username: pesanError }));
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        let pesanError;
        // validasi email
        if (!event.target.value) {
            pesanError = "Email tidak boleh kosong";
        } else if ((!/\S+@\S+\.\S+/.test(event.target.value))) {
            pesanError = "Email tidak valid";
        } else {
            pesanError = "";
        }
    
        // update error state
        setErrors((prevError) => ({ ...prevError, email: pesanError }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // cek apakah seluruh form valid atau masih ada error
        let formValid = true;
        for (let propName in errors) {
            if (errors[propName].length > 0) {
                formValid = false;
            }
        }

        // proses data jika form valid
        if (formValid) {
            console.log(formValid);
            alert("Username dan Email valid");
        }
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"
                    value={username} onChange={handleUsernameChange}/>
                    {errors.username && <small style={{ color: "red"}}>{errors.username}</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                    value={email} onChange={handleEmailChange}/>
                    {errors.email && <small style={{ color: "red"}}>{errors.email}</small>}
                </div>
                <input type="submit" style={{ marginTop: "10px"}}/>
            </form>
        </div>
    );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));