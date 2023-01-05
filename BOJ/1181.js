let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
input = Array.from(new Set(input.sort().sort((a, b) => a.length - b.length)));
console.log(input.join("\n"));
