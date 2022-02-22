const MyApp = () => {

  const [judul, setJudul] = React.useState("Belajar Ract");
  let foo = React.useRef("Hei");
  console.log("Rerender");

  const handleButtonClick = () => {
      foo.current = "Hello";
      if (judul === "Belajar React") {
          setJudul("Belajar Vue");
    } else {
      setJudul("Belajar React");
    }
  };

  const handleFooClick = () => {
      console.log(foo);
      console.log(foo.current);
  }

  return (
    <>
      <h1>{judul}</h1>
      <button onClick={handleButtonClick}>Click Me!</button>
      <button onClick={handleFooClick}>Get Foo</button>
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
