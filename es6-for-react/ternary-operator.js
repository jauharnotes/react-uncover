const user = "Jauhar";
const result = (user === "Admin") ? "Welcome, admin" : "User not found";

const input = "100";

const result1 = Number.isInteger(input) ? "Valid" : "invalid";
console.log(result1);

const result2 = (typeof input === "string") ? "Valid" : "invalid";
console.log(result2);

const foo = "100";
const bar = `<div class="${Number.isInteger(foo) ? 'valid' : 'invalid'}">`;
console.log(bar);