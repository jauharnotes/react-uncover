// const Belajar = (props) => <h1>Belajar {props.materi}</h1>;

// const myElement = (
//   <>
//     <Belajar materi="React" />
//     <Belajar materi="Vue" />
//     <Belajar materi="Remix" />
//   </>
// );

const Artis = (props) => {
  return (
    <figure key={props.nama}>
      <img style={{ height: "200px" }} src={props.pasFoto} alt={props.nama} />
      <figcaption>
        {props.nama} | {props.jurusan}
      </figcaption>
    </figure>
  );
};

const DaftarArtis = () => {
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

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Daftar Artis Cantik Dan Berbakat</h1>
      <hr />
      <section
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {artis.map((artis) => (
          <Artis
            key={artis.id}
            nama={artis.nama}
            jurusan={artis.jurusan}
            pasFoto={artis.pasFoto}
          />
        ))}
      </section>
    </>
  );
};

ReactDOM.render(<DaftarArtis />, document.getElementById("root"));
