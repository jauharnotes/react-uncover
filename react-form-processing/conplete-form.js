// class component
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      email: "",
      alamat: "",
      jurusan: "",
      jenisKelamin: "",
      beasiswa: false,
    };
  }
  handleInputCange = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  handleButtonClick = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div>
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            name="nama"
            id="nama"
            onChange={this.handleInputCange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleInputCange}
          />
        </div>

        <div>
          <label htmlFor="alamat">Alamat</label>
          <input
            type="text"
            name="alamat"
            id="alamat"
            onChange={this.handleInputCange}
          />
        </div>

        <div>
          <label htmlFor="email">Jurusan</label>
          <select
            name="jurusan"
            value={this.state.jurusan}
            onChange={this.handleInputCange}
          >
            <option value="">--Pilih Jurusan--</option>
            <option value="ilmu komputer">Ilmu Komputer</option>
            <option value="sistem informasi">Sistem Informasi</option>
            <option value="teknik informasi">Teknik Informasi</option>
            <option value="teknik komputer">Teknik Komputer</option>
          </select>
        </div>

        <div>
          <label>Jenis Kelamin</label>
          <input
            type="radio"
            name="jenisKelamin"
            id="jenisKelamin1"
            value="Laki-laki"
            checked={this.state.jenisKelamin === "Laki-laki"}
            onChange={this.handleInputCange}
          />
          <label htmlFor="jenisKelamin1">Laki-laki</label>
          <input
            type="radio"
            name="jenisKelamin"
            id="jenisKelamin2"
            value="perempuan"
            checked={this.state.jenisKelamin === "perempuan"}
            onChange={this.handleInputCange}
          />
          <label htmlFor="jenisKelamin2">Perempuan</label>
        </div>

        <div>
          <label>Status beasiswa</label>
          <input
            type="checkbox"
            name="beasiswa"
            id="beasiswa"
            onChange={this.handleInputCange}
          />
          <label htmlFor="beasiswa">Dapat beasiswa</label>
        </div>

        <button onClick={this.handleButtonClick}>Check Form</button>
      </div>
    );
  }
}


// // functional component
// const MyApp = () => {
//     const [form, setForm] = React.useState(
//         {
//             nama: "",
//             email: "",
//             alamat: "",
//             jurusan: "",
//             jenisKelamin: "",
//             beasiswa: false, 
//         }
//     )

//     const handleInputCange = (event) => {
//         if (event.target.type === "checkbox") {
//             setForm( event.target.checked );
//           } else {
//             setForm( event.target.value );
//           }
//     }

//     const handleButtonClick = () => {
//         console.log(form);
//     }

//     return(
//         <div className="container">
//         <div>
//           <label htmlFor="nama">Nama</label>
//           <input
//             type="text"
//             name="nama"
//             id="nama"
//             onChange={handleInputCange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             onChange={handleInputCange}
//           />
//         </div>

//         <div>
//           <label htmlFor="alamat">Alamat</label>
//           <input
//             type="text"
//             name="alamat"
//             id="alamat"
//             onChange={handleInputCange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Jurusan</label>
//           <select
//             name="jurusan"
//             value={form.jurusan}
//             onChange={handleInputCange}
//           >
//             <option value="">--Pilih Jurusan--</option>
//             <option value="ilmu komputer">Ilmu Komputer</option>
//             <option value="sistem informasi">Sistem Informasi</option>
//             <option value="teknik informasi">Teknik Informasi</option>
//             <option value="teknik komputer">Teknik Komputer</option>
//           </select>
//         </div>

//         <div>
//           <label>Jenis Kelamin</label>
//           <input
//             type="radio"
//             name="jenisKelamin"
//             id="jenisKelamin1"
//             value="Laki-laki"
//             checked={form.jenisKelamin === "Laki-laki"}
//             onChange={handleInputCange}
//           />
//           <label htmlFor="jenisKelamin1">Laki-laki</label>
//           <input
//             type="radio"
//             name="jenisKelamin"
//             id="jenisKelamin2"
//             value="perempuan"
//             checked={form.jenisKelamin === "perempuan"}
//             onChange={handleInputCange}
//           />
//           <label htmlFor="jenisKelamin2">Perempuan</label>
//         </div>

//         <div>
//           <label>Status beasiswa</label>
//           <input
//             type="checkbox"
//             name="beasiswa"
//             id="beasiswa"
//             onChange={handleInputCange}
//           />
//           <label htmlFor="beasiswa">Dapat beasiswa</label>
//         </div>

//         <button onClick={handleButtonClick}>Check Form</button>
//       </div>
//     )
// }

ReactDOM.render(<MyApp />, document.getElementById("root"));
