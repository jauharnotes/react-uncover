const generateRandom = (start =1, end =10) =>
  Math.floor(Math.random() * (end - start + 1)) + start;

console.log(generateRandom());
console.log(generateRandom(5));
console.log(generateRandom(10, 20));

const total = (a, b, cari) => cari(a, b);
const tambah = (x, y) => x + y;

console.log(total(5, 10, tambah));