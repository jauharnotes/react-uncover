import React, { useState } from 'react';
import RowMahasiswa from './components/RowMahasiswa';
import RowTambahMahasiswa from './components/RowTambahMahasiswa';

// Data awal tabel mahasiswa
const arrMahasiswas = [
  {
    nim: "18010245",
    nama: "Eka Putra",
    jurusan: "Teknik Informatika",
    asalProvinsi: "DKI Jakarta"
  },
  {
    nim: "19010214",
    nama: "Lisa Permata",
    jurusan: "Sistem Informasi",
    asalProvinsi: "Sumatera Barat"
  },
  {
    nim: "20010710",
    nama: "Rudi Setiawan",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Jawa Tengah"
  },
  {
    nim: "20010790",
    nama: "Friska Ramadhani",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Kalimantan Barat"
  }
];

const App = () => {
  const [mahasiswas, setMahasiswas] = useState(arrMahasiswas);

  // handler untuk menambah data mahasiswa, 
  // akan di-trigger dari komponen RowTambahMahasiswa
  const handleTambahMahasiswa = (data) => {
    const newMahasiswas = [
      ...mahasiswas, data
    ];
    setMahasiswas(newMahasiswas);
  }

  // handler untuk mengedit data mahasiswa
  // akan di-trigger dari komponen RowMahasiswa
  const handleEditMahasiswa = (data) => {
    // cari index dari mahasiswa yang akan diedit berdasarkan nomor nim
    const result = mahasiswas.findIndex(
      (mahasiswa) => mahasiswa.nim === data.nim
    );

    // copy mahasiswas karena fungsi splice akan mengubah array asal (mutate)
    const newMahasiswas = mahasiswas;
    newMahasiswas.splice(result, 1, data);
    setMahasiswas([...newMahasiswas]);

    // !! jika hanya menggunakan setMahasiswas(newMahasiswas), 
    // react tidak akan me-re-render halaman karena 
    // newMahasiswas = mahasiswa masih merujuk ke object yang sama.
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