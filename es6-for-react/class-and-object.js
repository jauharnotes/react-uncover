class Laptop {
    constructor (milik, merk) {
        this.milik = milik
        this.merk = merk
    }
    hidupkanLaptop() {
        return `Hidupkan laptop ${this.merk} milik ${this.milik}`;
    }
}

let laptopJohar = new Laptop("Johar", "Macbook M1");
console.log(laptopJohar.merk);
console.log(laptopJohar.milik);
console.log(laptopJohar.hidupkanLaptop());


// object tanpa class
let laptopRudi = {
    milik: "Rudi",
    merk: "Asus",
    hidupkanLaptop(){
        return `Hidupkan laptop ${this.merk} milik ${this.milik}`;
    }
}

console.log(laptopRudi.merk);
console.log(laptopRudi.milik);
console.log(laptopRudi.hidupkanLaptop());


let laptopJuned = {
    milik: "Juned",
    merk: "Asus",
    hidupkanLaptop(){return this},
    foo: () => this,
}

console.log(laptopJuned.hidupkanLaptop());
console.log(laptopJuned.foo());

// memproses object
let mahasiswa = {
    nama: "Eko",
    umur: 19,
    jurusan: "Teknik Informatika",
    getInfo() {
        return `${this.nama} (${this.umur} tahun) dari jurusan ${this.jurusan}`;
    }
}

console.log(mahasiswa);

mahasiswa.umur = 20;
mahasiswa.tempatLahir = "Lamongan";

console.log(mahasiswa);

for (prop in mahasiswa) {
    console.log(`Nilai ${prop} : ${mahasiswa[prop]}`);;
}

console.log(Object.keys(mahasiswa));
console.log(Object.values(mahasiswa));
console.log(Object.entries(mahasiswa));