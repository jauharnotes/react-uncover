const Countdown = () => {
    const [countdown, setCountdown] = React.useState(10);
    const [run, setRun] = React.useState(false);
    const [buttonName, setButtonName] = React.useState("Start");

    const intervalID = React.useRef(null);

    // componentDidMount (startup)
    React.useEffect(() => {
        intervalID.current = setInterval(() => {
            setCountdown((prevState) => (prevState - 1));
        }, 1000);

        setRun(true);
        setButtonName("Pause");
        console.log(`Startup | countdown: ${countdown}`);
    }, []);

    // componentDidUpdate (after render)
    React.useEffect(() => {
        if ( countdown === 0) {
            clearInterval(intervalID.current);
        }
        console.log(`After render | countdown: ${countdown}`);
    });

    // componentWillUnmount
    React.useEffect(() => {
        return () => {
            console.log(`Cleanup | countdown: ${countdown}`);
            clearInterval(intervalID.current);
        }
    }, []);

    const handleButtonClick = () => {
        if (run) {
            clearInterval(intervalID.current);
            setRun(false);
            setButtonName("Countinue");
        } else {
            intervalID.current = setInterval(() => {
                setCountdown((prevState) => (prevState - 1));
            }, 1000);

            setRun(true);
            setButtonName("Pause");
        }
    }

    return (
        <div className="container">
            <h1>{countdown}</h1>
            <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
    )
}

const MyApp = () => {
    const [showcountdown, setShowcountdown] = React.useState(false);

    const handleButtonClick = () => {
        setShowcountdown((prevState) => (!prevState));
    }

    return (
        <div className="container">
            <button onClick={handleButtonClick}>{showcountdown ? "Hide countdown" : "Show countdown"}</button>
            {showcountdown && <Countdown />}
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));