import React, { useEffect, useState } from 'react';
import RowMahasiswa from './components/RowMahasiswa';
import RowTambahMahasiswa from './components/RowTambahMahasiswa';

// Data awal tabel mahasiswa
// const arrMahasiswas = [
//   {
//     nim: "18010245",
//     nama: "Eka Putra",
//     jurusan: "Teknik Informatika",
//     asalProvinsi: "DKI Jakarta"
//   },
//   {
//     nim: "19010214",
//     nama: "Lisa Permata",
//     jurusan: "Sistem Informasi",
//     asalProvinsi: "Sumatera Barat"
//   },
//   {
//     nim: "20010710",
//     nama: "Rudi Setiawan",
//     jurusan: "Ilmu Komputer",
//     asalProvinsi: "Jawa Tengah"
//   },
//   {
//     nim: "20010790",
//     nama: "Friska Ramadhani",
//     jurusan: "Ilmu Komputer",
//     asalProvinsi: "Kalimantan Barat"
//   }
// ];

let url = "https://crud-mahasiswa-app-default-rtdb.asia-southeast1.firebasedatabase.app/mahsiswas.json";

const App = () => {
  const [mahasiswas, setMahasiswas] = useState([]);
  const [submitCount, setSubmitCount] = useState(0);

  useEffect(() => {
    const myFetch = async () => {
      let response = await fetch(url);
      let responseData = await response.json();

      const initMahasiswa = [];
      for (const key in responseData) {
        initMahasiswa.push({
          id: key,
          nim: responseData[key].nim,
          nama: responseData[key].nama,
          jurusan: responseData[key].jurusan,
          asalProvinsi: responseData[key].asalProvinsi,
        });
      }
      setMahasiswas(initMahasiswa);
    }
    myFetch();
  }, [submitCount]);

  // handler untuk menambah data mahasiswa, 
  // akan di-trigger dari komponen RowTambahMahasiswa
  const handleTambahMahasiswa = async (data) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    });
    setSubmitCount(submitCount + 1);
  }

  // handler untuk mengedit data mahasiswa
  // akan di-trigger dari komponen RowMahasiswa
  const handleEditMahasiswa = async (id, data) => {
      let url = `https://crud-mahasiswa-app-default-rtdb.asia-southeast1.firebasedatabase.app/mahasiswas/${id}.json`;
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data)
      });
      setSubmitCount(submitCount + 1);
  }

  // handler untuk menghapus data mahasiswa di komponent RowMahasiswa
  const handleHapusMahasiswa = async (e) => {
    let url = `https://crud-mahasiswa-app-default-rtdb.asia-southeast1.firebasedatabase.app/mahasiswas/${e.target.id}.json`;
    await fetch(url, {
      method: "DELETE"
    });
    setSubmitCount(submitCount + 1);
    console.log(e.target.id);
  }

  return (
    <div className="container mt-5">

      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Tabel Mahasiswa</h1>

          <table className="table mt-4">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Asal Provinsi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                mahasiswas.map((mahasiswa) =>
                  <RowMahasiswa
                    key={mahasiswa.nim}
                    mahasiswa={mahasiswa}
                    onEditMahasiswa={handleEditMahasiswa}
                    onHapusMahasiswa={handleHapusMahasiswa}
                  />
                )
              }
              <RowTambahMahasiswa
                mahasiswas={mahasiswas}
                onTambahMahasiswa={handleTambahMahasiswa}
              />
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default App;