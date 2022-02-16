// array forEach
let arr = [10, 20, 30, 40];

// arr.forEach(function(values, keys) {
//     console.log(`Nilai array di index-${keys} adalah ${values}`);
// });

arr.forEach((values, keys) => {
    console.log(`Nilai array di index-${keys} adalah ${values}`);
});


let arr1 = [10, 20,30, 40];
arrayKuadrat = [];

arr1.forEach((values) => arrayKuadrat.push(values*values))

console.log(arrayKuadrat);


// array map
let arr2 = [10, 20,30, 40];
arrayKuadrat2 = arr2.map((value) => value*value);

console.log(arrayKuadrat2);

const mahasiswas = [
    {
        nama: "jauhar",
        umur: 19,
        jurusan: "Sistem Informasi"
    },
    {
        nama: "juned",
        umur: 20,
        jurusan: "Bahasa"
    },
    {
        nama: "agung",
        umur: 22,
        jurusan: "Sistem Informasi"
    },
];

const prosesMahasiswa = (mahasiswa) =>
    `<p>${mahasiswa.nama} (${mahasiswa.umur}), ${mahasiswa.jurusan}</p>`;

const formatMahasiswas = mahasiswas.map(prosesMahasiswa);

console.log(formatMahasiswas);