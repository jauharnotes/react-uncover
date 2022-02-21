const getNumber = () => {
  console.log("getNumber telah dijalankan");
  return 100000;
};

const MyApp = () => {
  const [belajar, setBelajar] = React.useState("Belajar React");
  const [counter, setCounter] = React.useState(() => getNumber()); // penggunaan arrow notation untuk mencegah rerender ulang

  const handleBelajar = () => {
    if (belajar === "Belajar React") {
      setBelajar("Belajar Vue");
    } else {
      setBelajar("Belajar React");
    }
  };

  const handleFooClick = () => {
      setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <>
      <h1>
        {belajar} {counter}
      </h1>
      <button onClick={handleBelajar}>Ganti Framework </button>
      <button onClick={handleFooClick}>
        + 1
      </button>
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
