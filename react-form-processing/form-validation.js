class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            errors: { userName: "", email: ""},
        };
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const userName = this.state.userName;
        const email = this.state.email;
        let errors = this.state.errors;

        if (!userName) {
            errors.userName = "Username tidak boleh kosong";
        } else if (userName.length < 6) {
            errors.userName = "Username minimal 6 karakter";
        } else {
           errors.userName = "";
        }

        // validasi email
        if (!email) {
            errors.email = "Email todak boleh kosong";
        } else if (!/\S+@\S+/.test(email)) {
            errors.email = "Email tidak valid";
        } else {
            errors.email = "";
        }

        // update error state
        this.setState({ errors: errors});

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
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} noValidate>
                   <div>
                       <label htmlFor="userName">Username</label>
                       <input type="text" id="userName" name="userName" value={this.state.userName}
                       onChange={this.handleInputChange}/>
                       {this.state.errors.userName && <small>{this.state.errors.userName}</small>}
                   </div>
                   <div>
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" name="email" value={this.state.email}
                       onChange={this.handleInputChange}/>
                       {this.state.errors.email && <small>{this.state.errors.email}</small>}
                   </div>
                   <input type="submit" style={{ marginTop: "10px"}}/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));