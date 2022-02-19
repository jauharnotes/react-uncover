class MyApp extends React.Component {
    constructor() {
        super();
        let varBgColor = "red";
        this.state = {bagColor: varBgColor}
    }

    handleChangeBg = () => {
        if (this.state.bagColor == "red") {
            this.setState({bagColor: "yellow"})
        } else {
            this.setState({bagColor: "red"})
        }
    }
    render() {
        console.log(this.state);
        return(
            <div className={this.state.bagColor}>
                <button onClick={this.handleChangeBg}>Tukar Warna Background</button>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));