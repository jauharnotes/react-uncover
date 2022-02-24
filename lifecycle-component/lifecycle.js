class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        console.log("Hello from constructor");
    }

    handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));
        this.setState((prevState) => ({ counter: prevState.counter + val}))
    }

    render() {
        console.log("Hello from render()");
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button val="+1" onClick={this.handleButtonClick}>Counter + 1</button>
                <button val="-1" onClick={this.handleButtonClick}>Counter - 1</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("Hello from componentDidMount");
    }

    componentDidUpdate() {
        console.log("Hello from componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Hello from componentWillUnmount");
    }
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCounter: false };
    }
    handleButtonClick = () => {
        this.setState((prevState) => ({ showCounter: !prevState.showCounter }));
    }
    render() {
        return(
            <div>
                <button onClick={this.handleButtonClick}>{this.state.showCounter ? "Hide counter" : "Show counter"}</button>
                {this.state.showCounter && <Counter />}
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));