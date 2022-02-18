class Button extends React.Component {
  handlebuttonClick = (event) => {
    console.log(this);
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);
  }
  render() {
    return (
      <>
      <button onClick={this.handlebuttonClick} style={{ margin: "10px" }}>
        {this.props.children}
      </button>
      <button onClick={this.props.onTombolClick}>Click Me!</button>
      </>
    );
  }
}

class MyApp extends React.Component {
  handleClick = () => {
    alert("Alert dari MyApp");
  }
  render() {
    return (
      <>
        <h1>Belajar React</h1>
        <Button pesan="Hello React">ReactJs</Button>
        <Button pesan="Hello Vue">VueJs</Button>
        <Button pesan="Hello Remix">RemixJs</Button>
        <Button onTombolClick={this.handleClick}/>
      </>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
