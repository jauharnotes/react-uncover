class MyApp extends React.Component {
    constructor() {
        super()
        this.state = { counter: 0 }
    }

    handleCouterAdd = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }

    handleCouterSub = () => {
        this.setState((prevState) =>  ({counter: prevState.counter - 1}))
        this.setState((prevState) =>  ({counter: prevState.counter - 1}))
    }

    render() {
        console.log(this.state.counter);
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleCouterAdd}>+</button>
                <button onClick={this.handleCouterSub}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));