const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [A, B, V] = input[0].split(" ").map(Number);
console.log(Math.ceil((V - B) / (A - B)));
