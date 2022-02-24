const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const [newCounter, setNewCounter] = React.useState(0);

    const handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));
        setCounter((prevCounter) => prevCounter + val);
    }

    const handleNewButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));
        setNewCounter((prevCounter) => prevCounter + val);
    }
    // Ini dijalankan untuk setiap render, kecuali unmount
    React.useEffect(() => {
        console.log(`Dari useEffect 1, counter: ${counter}`);
    }, [counter]);

    // Ini dijalankan di awal, dan pada saat unmount
    React.useEffect(() => {
        console.log(`Dari useEffect 2, counter: ${counter}`);
        return () => {
            console.log(`Dari eseEffect 2, diproses saat unmount`);
        }
    }, []);
    
    return(
        <div>
            <h1>{counter}</h1>
            <button val="+1" onClick={handleButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleButtonClick}>Counter - 1</button>
            <h1>{newCounter}</h1>
            <button val="+1" onClick={handleNewButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleNewButtonClick}>Counter - 1</button>
        </div>
    )
}

const MyApp = () => {
    const [showCounter, setShowCounter] = React.useState(false);

    const handleButtonClick = () => {
        setShowCounter((prevCounter) => !prevCounter)
    }

    return(
        <div className="container">
            <button onClick={handleButtonClick}>{showCounter ? "Hide counter" : "Show counter"}</button>
            {showCounter && <Counter />}
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));