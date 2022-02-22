// menggunakan class component
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "Rudi" };
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleButtonClick =() => {
      this.setState({ input: "Lisa"})
  }

  render() {
    return (
      <div>
        <h1>{this.state.input}</h1>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Tukar Nama</button>
      </div>
    );
  }
}

// menggunakan functional component
// const MyApp = () => {
//     const [input, setInput] = React.useState("Realtime Input");

//     const handleInputChange = (event) => {
//         setInput(event.target.value);

//     }

//     // const handleButtonClick = () => {
//     //     console.log(input);
//     // }
//     return(
//         <div>
//             <h1>{input}</h1>
//             <input type="text" onChange={handleInputChange}/>
//             {/* <button onClick={handleButtonClick}>Check Input</button> */}
//         </div>
//     )
// }

ReactDOM.render(<MyApp />, document.getElementById("root"));
