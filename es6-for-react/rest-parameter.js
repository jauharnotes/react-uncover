function foo(...arg) {
    return arg;
}

console.log(foo(1,2,3,4,5));
console.log(foo(6,7,8,9));
console.log(foo(10,11,12,13));

function tambah(...args) {
    let total = 0;
    for (let angka of args) {
        total += angka;
    }
    return total;
}

console.log(tambah(1,2,3));
console.log(tambah(4,5,6,7));
console.log(tambah(4,5,6,7,8,9,10));



const arr = [10,11,12,13];
[a, b, ...sisa] = arr;

console.log(a);
console.log(b);
console.log(sisa);