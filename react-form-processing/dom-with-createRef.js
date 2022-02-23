// class component
// class MyApp extends React.Component {
//     constructor() {
//         super();
//         this.inputRef = React.createRef();
//     }

//     handleButtonClick = () => {
//         console.log(this.inputRef.current.value);
//     }

//     render() {
//       return(
//         <div>
//             <input type="text" ref={this.inputRef}/>
//             <button onClick={this.handleButtonClick}>Check Input</button>
//         </div>
//       )
//    }
// }

// functional component
const MyApp = () => {
    const inputRef = React.createRef();

    const handleButtonClick = () => {
        console.log(inputRef.current.value);
    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleButtonClick}>Check Input</button>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));