let coffees = ["Expresso", "Cappucino", "Moccacino"];
const mahasiswa = [
    {
        id: 1,
        nama: "Eka",
        umur: 19,
        jurusan: "Teknik Informasi"
    },
    {
        id: 2,
        nama: "Johar",
        umur: 19,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Chelsea",
        umur: 19,
        jurusan: "Teknik Mesin"
    },
]

const myElement = (
    <>
        <ul>
            {coffees.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <table>
            <thead>
                <tr>
                    <th>Nama</th><th>Umur</th><th>Jurusan</th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map((item) => 
                    <tr key={item.id}>
                        <td>{item.nama}</td>
                        <td>{item.umur}</td>
                        <td>{item.jurusan}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
)

ReactDOM.render(myElement, document.getElementById('root'));