// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { belajarReact: true };
//   }
//   handleBelajarReactChange = (event) => {
//     this.setState({ belajarReact: event.target.checked });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.belajarReact.toString()}</h1>
//         <input
//           type="checkbox"
//           id="belajarReact"
//           checked={this.state.belajarReact}
//           onChange={this.handleBelajarReactChange}
//         />
//         <label htmlFor="belajarReact">Belajar React</label>
//       </div>
//     );
//   }
// }


const MyApp = () => {
    const [belajarReact, setBelajarReact] = React.useState(true);

    const handleBelajarReactChange = (event) => {
        setBelajarReact(event.target.checked);
    }

    return(
        <div>
        <h1>{belajarReact.toString()}</h1>
        <input
          type="checkbox"
          id="belajarReact"
          checked={belajarReact}
          onChange={handleBelajarReactChange}
        />
        <label htmlFor="belajarReact">Belajar React</label>
      </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));