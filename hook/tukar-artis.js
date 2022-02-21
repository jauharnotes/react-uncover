const Artis = (props) => {
  const handleTukarArtis = () => {
    props.onTukarArtis({
      nama: "Maudy Ayunda",
      jurusan: "Sistem Informasi",
      pasFoto:
        "https://cdn.keepo.me/images/post/lists/2019/08/07/main-list-image-0c32ad2b-6d3b-4f1a-9d5b-ea4bfb035e07-1.jpg",
    });
  };
  return (
    <>
      <button onClick={handleTukarArtis}>Tukar Artis</button>
      <figure>
        <img style={{ height: "300px"}} src={props.artis.pasFoto} />
        <figcaption style={{ textAlign: "center"}}>
          {props.artis.nama} ({props.artis.jurusan})
        </figcaption>
      </figure>
    </>
  );
};

const MyApp = () => {
  const [artis, setArtis] = React.useState({
    nama: "Chealse Island",
    jurusan: "Teknik Elektro",
    pasFoto:
    "https://portrait.sollafune.com/ChelseaIslan/Chelsea/Chelsea0115.jpg",
  });

  const handleTukarArtis = (artisBaru) => {
    setArtis({
      nama: artisBaru.nama,
      jurusan: artisBaru.jurusan,
      pasFoto: artisBaru.pasFoto,
    });
  };

  return (
    <div>
      <Artis artis={artis} onTukarArtis={handleTukarArtis} />
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
