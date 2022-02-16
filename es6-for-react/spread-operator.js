let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr4 = [...arr1, 40, 50];
console.log(arr4);

let arr5 = [40, 50, ...arr2];
console.log(arr5);


let mahasiswa = {
    nama: "Eka",
    umur: 19,
    jurusan: "Teknik elektro"
};

let mahasiswa1 = {
    ...mahasiswa,
    umur: 20,
    tempatLahir: "Lamongan"
}

console.log(mahasiswa1);



let mahasiswa2 = {
    nama: "Eka",
    umur: 19,
    jurusan: "Teknik elektro"
};

let umur = 20;
let tempatLahir = "lamongan"

let mahasiswa3 = {
    ...mahasiswa,
    umur,
    tempatLahir
}

console.log(mahasiswa1);
console.log(mahasiswa3);