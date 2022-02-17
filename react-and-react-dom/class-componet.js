class JudulReact extends React.Component {
  render() {
    return <h1>Sedang Belajar React</h1>;
  }
}

class JudulVue extends React.Component {
  render() {
    return <h1>Sedang Belajar Vue</h1>;
  }
}

// const myElement = (
//     <div>
//         <JudulReact />
//         <JudulVue />
//     </div>
// )

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

class MyComponent extends React.Component {
  constructor() {
    super();
    this.JudulReactJs = "Belajar React";
  }
  judulHurufKecil() {
    return this.JudulReactJs.toLocaleLowerCase();
  }
  render() {
    return (
      <div>
        <JudulReact />
        <JudulVue />
        <h1>{this.JudulReactJs}</h1>
        <p>Stt... lagi serius {this.judulHurufKecil()}</p>
        <hr />
        <section style={{ display: "flex", textAlign: "center" }}>
          {artis.map((artis) => (
            <figure key={artis.id}>
              <img
                style={{ height: "200px" }}
                src={artis.pasFoto}
                alt={artis.nama}
              />
              <figcaption>
                {artis.nama} {artis.jurusan}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
