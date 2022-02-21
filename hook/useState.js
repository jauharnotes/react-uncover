const MyApp = () => {
  // const [judul, setJudul] = React.useState({
  //   satu: "Belajar React",
  //   dua: "Belajar Vue",
  // });
  // console.log(judul);

  // const handleClick = () => {
  //   setJudul( prevJudul => ({ ...prevJudul, satu: "Belajar React Hook" }));
  // };
  // return (
  //   <div>
  //     <h1>{judul.satu}</h1>
  //     <h1>{judul.dua}</h1>
  //     <button onClick={handleClick}>Click Me!</button>
  //   </div>
  // );

  const [counter, setCounter] = React.useState(0);

  const handleDec = () => {
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
  }

  
  const handleInc = () => {
    setCounter(prevCounter => prevCounter -1);
    setCounter(prevCounter => prevCounter -1);
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDec}>+</button>
      <button onClick={handleInc}>-</button>
    </div>
  )
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
