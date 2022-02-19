const artis = [
  {
    id: "01",
    nama: "Chelsea Island",
    jurusan: "Teknik Informatika",
    pasFoto:
      "https://portrait.sollafune.com/ChelseaIslan/Chelsea/Chelsea0115.jpg",
  },
  {
    id: "02",
    nama: "Raisa",
    jurusan: "Teknik Elekro",
    pasFoto: "https://www.kibrispdr.org/dwn/1/gambar-artis-terkenal.jpg",
  },
  {
    id: "03",
    nama: "Maudy Ayunda",
    jurusan: "Fisika",
    pasFoto:
      "https://cdn.keepo.me/images/post/lists/2019/08/07/main-list-image-0c32ad2b-6d3b-4f1a-9d5b-ea4bfb035e07-1.jpg",
  },
  {
    id: "04",
    nama: "Dian Sastro",
    jurusan: "Ekonomi",
    pasFoto:
      "https://cdn.keepo.me/images/post/lists/2019/08/07/main-list-image-435ea7cd-7090-4585-be0e-3038baf57710-9.jpg",
  },
];

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: artis[0].nama,
      jurusan: artis[0].jurusan,
      pasFoto: artis[0].pasFoto,
    };
  }

  handleArtisClick = (event) => {
    let index = parseInt(event.target.getAttribute("index"));
    console.log(index);
    this.setState({
      nama: artis[index].nama,
      jurusan: artis[index].jurusan,
      pasFoto: artis[index].pasFoto,
    });
  };

  //   handleArtis1 = () => {
  //     this.setState({
  //         nama: artis[1].nama,
  //         jurusan: artis[1].jurusan,
  //         pasFoto: artis[1].pasFoto,
  //     });
  //   }

  //   handleArtis2 = () => {
  //     this.setState({
  //         nama: artis[2].nama,
  //         jurusan: artis[2].jurusan,
  //         pasFoto: artis[2].pasFoto,
  //     });
  //   }
  render() {
    console.log(this.state);
    return (
      <div>
        {artis.map((artis, i) => (
          <button key={artis.id} onClick={this.handleArtisClick} index={i}>
            {artis.nama}
          </button>
        ))}

        <figure>
          <img src={this.state.pasFoto} alt={this.state.nama} />
          <figcaption>
            {this.state.nama} {this.state.jurusan}
          </figcaption>
        </figure>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
