class MyApp extends React.Component {
  constructor(props) {
    super(props);
    let VarJudul = "Belajar React";
    this.state = { judul: VarJudul };
  }
  handleButtonClick = () => {
    if (this.state.judul !== "Belajar Vue") {
        this.setState({ judul: "Belajar Vue" });
    } else {
        this.setState({ judul: "Belajar React" });
    }
    // this.state.judul == "Belajar React" && this.setState({ judul: "Belajar Vue" });
  };
  render() {
      console.log(`Render di proses... isi state judul = ${this.state.judul}`);
    return (
      <div style={{ margin: "0 auto", textAlign: "center"}}>
          <h1>Constant</h1>
        <div>{this.state.judul}</div>
        <button onClick={this.handleButtonClick}>Click Me!</button>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
