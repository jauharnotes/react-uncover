let mahasiswa = ["andi", "johar", "eko"];
let [a, b, c] = mahasiswa;

console.log(a);
console.log(b);
console.log(c);

let family = {
    name: "johar",
    umur: 28,
    job: "Sofware Engineer",
};

let {name, umur} = family;
console.log(name);
console.log(umur);

const dataMahasiswa = () => {
    return {jeneng: "Johar", weton: 19, jurusan: "Teknik Informatika"}
}

let {jeneng, weton} = dataMahasiswa();

console.log(jeneng);
console.log(weton);