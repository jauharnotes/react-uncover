class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { materi: "React"};
  }
  handleMateriChange = (event) => {
    this.setState({ materi: event.target.value });
  };
  render() {
    return (
      <div>
          <h1>{this.state.materi}</h1>
          <div onChange={this.state.handleMateriChange}>
              <input type="radio" value="React" name="materi" id="materi1"
                checked={this.state.materi === "React"} onChange={this.handleMateriChange}
              />
              <label htmlFor="materi1">Belajar React</label>
              <input type="radio" value="Vue" name="materi" id="materi2"
                checked={this.state.materi === "Vue"} onChange={this.handleMateriChange}
              />
              <label htmlFor="materi2">Belajar Vue</label>
              <input type="radio" value="Remix" name="materi" id="materi3"
                checked={this.state.materi === "Remix"} onChange={this.handleMateriChange}
              />
              <label htmlFor="materi3">Belajar Remix</label>
          </div>
      </div>
    );
  }
}


// const MyApp = () => {
//     const [materi, setMateri] = React.useState("React");

//     const handleMateriChange = (event) => {
//         setMateri(event.target.value);
//     }

//     return(
//         <div>
//         <h1>{materi}</h1>
//         <div onChange={handleMateriChange}>
//               <input type="radio" value="React" name="materi" id="materi1"
//                 checked={materi === "React"} onChange={handleMateriChange}
//               />
//               <label htmlFor="materi1">Belajar React</label>
//               <input type="radio" value="Vue" name="materi" id="materi2"
//                 checked={materi === "Vue"} onChange={handleMateriChange}
//               />
//               <label htmlFor="materi2">Belajar Vue</label>
//               <input type="radio" value="Remix" name="materi" id="materi3"
//                 checked={materi === "Remix"} onChange={handleMateriChange}
//               />
//               <label htmlFor="materi3">Belajar Remix</label>
//           </div>
//       </div>
//     )
// }

ReactDOM.render(<MyApp />, document.getElementById("root"));