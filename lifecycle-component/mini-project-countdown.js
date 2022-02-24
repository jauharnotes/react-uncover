class Countdown extends React.Component {
    constructor() {
        super();
        this.state = {countdown: 10, run: true, buttonName: "Pause"};
    }

    componentDidMount() {
        this.intervalID =  setInterval(() => {
            this.setState(
                (prevState) => ({ countdown: prevState.countdown -1 })
            )
         }, 1000);

         this.setState({ run: true, buttonName: "Pause"});
         console.log("componentDidMount diproses");
    }

    componentDidUpdate() {
        if (this.state.countdown === 0) {
            clearInterval(this.intervalID);
        }
        console.log(`componentDidUpdate: ${this.state.countdown}`);
    }

    handleButtonClick = () => {
       if (this.state.run) {
           clearInterval(this.intervalID);
           this.setState({ run: false, buttonName: "Continue"});
       } else {
        this.intervalID =  setInterval(() => {
            this.setState(
                (prevState) => ({ countdown: prevState.countdown -1 })
            )
         }, 1000);
         this.setState({ run: true, buttonName: "Pause"});
       }
    }

    render() {
        console.log(`render: ${this.state.countdown}`);
        return(
            <div>
                <h1>{this.state.countdown}</h1>
                <button onClick={this.handleButtonClick}>{this.state.buttonName}</button>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        console.log("componentWillUnmount diproses");
    }
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showcountdown: false};
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({ showcountdown: !prevState.showcountdown }));
    }

    render() {
        return(
            <div style={{ textAlign: "center"}}>
                <button onClick={this.handleButtonClick}>{this.state.showcountdown ? "Hide countdown" : "Show countdown"}</button>
                {this.state.showcountdown &&
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center"}}>
                        <Countdown />
                        <Countdown />
                        <Countdown />
                    </div>
                }
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));