// menggunakan class component
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { alamat: "Kp Mundur Pantang Maju" };
    }
  
    handleInputChange = (event) => {
      this.setState({ alamat: event.target.value });
    };
  
    handleButtonClick =() => {
        this.setState({ alamat: "Kp Maju Pantang Mundur"})
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.alamat}</h1>
          <textarea type="text" value={this.state.alamat} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>Ganti Alamat</button>
        </div>
      );
    }
  }

  ReactDOM.render(<MyApp />, document.getElementById("root"));