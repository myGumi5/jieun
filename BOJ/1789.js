let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = Number(input);

let n = 1;
while (n * (n + 1) <= 2 * input) n++;
console.log(n - 1);
