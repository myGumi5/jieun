const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(BigInt);
console.log((A + B).toString());
