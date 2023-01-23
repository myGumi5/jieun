let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const L = Number(input[0]);
const str = input[1];

let hash = 0;
let r = 1;

for (let i = 0; i < L; i++) {
  hash += (str.charCodeAt(i) - 96) * r;
  hash %= 1234567891;
  r *= 31;
  r %= 1234567891;
}

console.log(hash);
