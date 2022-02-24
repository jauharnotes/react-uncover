import { useState } from 'react';
import './App.css';

const Button = (props) => {
  const handleButtonClick = () => {
    props.onButtonClick(props.children);
  }
  return(
    <div>
      <button onClick={handleButtonClick}>{props.children}</button>
    </div>
  )
}

function App() {
  const [judul, setJudul] = useState("React");

  const handleButtonClick = (judul) => {
    setJudul(judul);
  }
  return (
    <div className="App">
      <h1>Belajar {judul}</h1>
      <Button onButtonClick={handleButtonClick}>React</Button>
      <Button onButtonClick={handleButtonClick}>Vue</Button>
    </div>
  );
}

export default App;
