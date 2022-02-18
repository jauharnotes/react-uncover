const Button = (props) => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);
  };

  return (
    <>
      <button onClick={handleButtonClick} style={{ margin: "10px" }}>
        {props.children}
      </button>
      <button onClick={props.onTombolClick}>Click Me!</button>
    </>
  );
};

const MyApp = () => {
  const handleAlert = () => {
    alert("Alert Dari MyApp");
  };
  return (
    <>
      <h1>Belajar React</h1>
      <Button pesan="Belajar React">React</Button>
      <Button pesan="Belajar Vue">Vue</Button>
      <Button pesan="Belajar Remix">Remix</Button>
      <Button onTombolClick={handleAlert} />
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
