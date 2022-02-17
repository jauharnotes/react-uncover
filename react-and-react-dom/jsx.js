const mytext = "Belajar React";

let nilai = 80;
let pesan;
if (nilai > 70) {
    pesan = "Selamat anda lulus";
} else {
    pesan= "Maaf, silahkan coba lagi";
}

let nilai2 = 90;

const myElement = (
  <>
    <h1 id="judul" style={{backgroundColor: "black", color: "#fff"}}>{mytext}</h1>
    {(nilai2 > 80) && <p>Selamat anda lulus</p>}
    <p style={{color: 'violet'}}>10 + 5 = {10 + 5}</p>
    <p>{pesan}</p>
    <p>{(nilai2 > 70) ? "Selamat anda lulus" : "Maaf, silahkan coba lagi"}</p>
    <ul>
      <li>
        <a href="https://id.wikipedia.org/wiki/Espreso">Expresso</a>{" "}
      </li>
      <li>
        <a href="https://id.wikipedia.org/wiki/Kappucino">Cappuccino</a>
      </li>
      <li>
        <a href="https://id.wikipedia.org/wiki/Moka">Moccacino</a>
      </li>
    </ul>
  </>
);

ReactDOM.render(myElement, document.getElementById("root"));
