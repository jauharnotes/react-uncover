class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buah: "mangga"};
    }
    handleBuahChange = (event) => {
        this.setState({ buah: event.target.value})
    }

    handleButtonClick = () => {
        this.setState({ buah: "semangka"})
    }
    render() {
        return(
            <div>
                <h1>{this.state.buah}</h1>
                <select value={this.state.buah} onChange={this.handleBuahChange}>
                    <option value="semangka">Semangka</option>
                    <option value="pisang">Pisang</option>
                    <option value="kelapa">Kelapa</option>
                    <option value="mangga">Mangga</option>
                </select>
                <button onClick={this.handleButtonClick}>Pilih Semangka</button>
            </div>
        )
    }
}

// const MyApp = () => {
//   const [buah, setBuah] = React.useState("mangga");

//   const handleBuahChange = (event) => {
//     setBuah(event.target.value);
//   };

//   const handleButtonClick = () => {
//       setBuah("semangka");
//   }

//   return (
//     <div>
//       <h1>{buah}</h1>
//       <select value={buah} onChange={handleBuahChange}>
//         <option value="semangka">Semangka</option>
//         <option value="pisang">Pisang</option>
//         <option value="kelapa">Kelapa</option>
//         <option value="mangga">Mangga</option>
//       </select>
//       <button onClick={handleButtonClick}>Pilih Semangka</button>
//     </div>
//   );
// };

ReactDOM.render(<MyApp />, document.getElementById("root"));
