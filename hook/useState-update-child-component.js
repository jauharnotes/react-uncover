const Tombol = (props) => {
  const handleClick = () => {
    // props.tombolType === "dec" ? props.onTombolClick(-1) : props.onTombolClick(+1);
    props.onTombolClick(props.counterChange)
  };
  return <button onClick={handleClick}>{props.children}</button>;
};

const MyApp = () => {
  const [counter, setCounter] = React.useState(0);

  const handleTombolClick = (change) => {
    setCounter((prevCounter) => prevCounter + change);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <Tombol onTombolClick={handleTombolClick} counterChange={-1}>
        - 1
      </Tombol>
      <Tombol onTombolClick={handleTombolClick} counterChange={+1}>
        + 1
      </Tombol>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
