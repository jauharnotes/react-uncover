import { useState } from "react";

const RowTambahMahasiswa = (props) => {

    // state untuk data imputan form
    const [formInput, setFormInput] = useState({
        nim: "",
        nama: "",
        jurusan: "",
        asalProvinsi: "",
    });

    // function untuk memeriksa apakah nim ada yang sama
    const cekDuplikasiNim = () => {
      return (props.mahasiswas.find((mahasiswa) => mahasiswa.nim === formInput.nim));
    }

    // state untuk data menampung pesan error
    const [errors, setErrors] = useState({
       ...formInput
    });

    // function untuk membuat 2 ways binding antara form dengan state
    const handleInputChange = (event) => {
    //    setFormInput({...formInput, [event.target.name]: event.target.value});
        setFormInput((prevState) => ({
            ...prevState, [event.target.name]: event.target.value
        }));
        // console.log(event.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let pesanErrors = {};

        // validasi nim
        if (formInput.nim.trim() === "") {
            pesanErrors.nim = "Nim tidak boleh kosong";
        
        } else if (!/^[0-9]{8}$/.test(formInput.nim)) {
            pesanErrors.nim = "Nim harus 8 karakter angka";
        } else if (cekDuplikasiNim()) {
          pesanErrors.nim = "Nim sudah dipakai";
        } else {
            pesanErrors.nim = "";
        }
        // validasi nama
        if (formInput.nama.trim() === "") {
            pesanErrors.nama = "Nama tidak boleh kosong";
        } else {
            pesanErrors.nama = "";
        }
    
        // validasi jurusan
        if (formInput.jurusan.trim() === "") {
            pesanErrors.jurusan = "Jurusan tidak boleh kosong";
        } else {
            pesanErrors.jurusan = "";
        }

        // validasi asalProvinsi
        if (formInput.asalProvinsi.trim() === "") {
            pesanErrors.asalProvinsi = "Asal provinsi tidak boleh kosong";
        } else {
            pesanErrors.asalProvinsi = "";
        }

        // update error state
        setErrors(pesanErrors);

        // cek apakah seluruh form valid atau masih ada error
        let formValid = true;
        for (let inputName in pesanErrors) {
            if (pesanErrors[inputName].length > 0) {
                formValid = false;
            }
        }

        // proses data jika form valid
        if (formValid === true) {
            props.onTambahMahasiswa(formInput);
            // console.log(formInput);
        }

        // kosongkan inputan form
        setFormInput({
            nim: "",
            nama: "",
            jurusan: "",
            asalProvinsi: "",
        })
    }

  return (
    <tr>
      <td colSpan="5">
        <form onSubmit={handleFormSubmit}>
          <div className="row row-cols-5 g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="nim"
                placeholder="00000000"
                onChange={handleInputChange}
                value={formInput.nim}
              />
              {errors.nim && <small>{errors.nim}</small>}
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="nama"
                placeholder="Fulan Fulan"
                onChange={handleInputChange}
                value={formInput.nama}
              />
              {errors.nama && <small>{errors.nama}</small>}
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="jurusan"
                placeholder="Sistem Informasi"
                onChange={handleInputChange}
                value={formInput.jurusan}
              />
              {errors.jurusan && <small>{errors.jurusan}</small>}
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="asalProvinsi"
                placeholder="DKI Jakarta"
                onChange={handleInputChange}
                value={formInput.asalProvinsi}
              />
              {errors.asalProvinsi && <small>{errors.asalProvinsi}</small>}
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Tambah
              </button>
            </div>
          </div>
        </form>
      </td>
    </tr>
  );
};

export default RowTambahMahasiswa;
