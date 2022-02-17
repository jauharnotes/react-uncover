const handleClick = () => {
  alert("Tombol di klik");
};

const myElement = <button onClick={handleClick}>Click Me!</button>;

ReactDOM.render(myElement, document.getElementById("root"));
